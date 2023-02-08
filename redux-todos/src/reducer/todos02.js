// redux toolkit 활용 버전
import axios from "axios";

import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("fetchTodo", async () => {
  let { data } = await axios.get("http://localhost:5000/todos");

  return data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    fetchData: {
      [fetchData.fulfilled()]: (_, action) => {
        return action.payload;
      },
    },

    todoReducerCreate: {
      reducer: (state, action) => {
        // return state.concat(action.payload);
        //reduxt toolkit에는 immer 라이브러리가 포함된다.
        //  => 데이터 변형을 주어도 불변성을 지키게 도와준다.
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            createAt: new Date().toDateString(),
            done: false,
          },
        };
      },
    },

    fetchTodo: (_, action) => {
      return action.payload;
    },

    todoReducerRemove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    todoReducerToggel: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(fetchData.pending, () => {
        return [{ id: 1, text: "로딩중", done: false }];
      })
      .addCase(fetchData.rejected),
      () => {
        return [{ id: 1, text: "실패", done: false }];
      };
  },
});

export const {
  todoReducerRemove,
  todoReducerCreate,
  todoReducerToggel,
  fetchTodo,
} = todoSlice.actions;

const todos = todoSlice.reducer;
export default todos;

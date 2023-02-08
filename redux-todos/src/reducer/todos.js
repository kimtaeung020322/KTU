import { createSelector, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스로 todos 만들기", done: false },
];

const CREATE = "CREATE";
const REMOVE = " REMOVE";
const TOGGLE = "TOGGLE";

export const todoReducerCreate = (text) => ({
  type: CREATE,
  payload: { id: nanoid(), text: text, done: false },
});
export const todoReducerRemove = (id) => ({ type: REMOVE, payload: id });
export const todoReducerToggle = (id) => ({ type: TOGGLE, payload: id });

//셀렉터 함수들
const getTodos = (state) => state.done;

//  reselect : 골라낸 상태에서 다시 값을 골라낸다. => 이전 상태값이 변하지 않으면 재계산 X

export const getTotaCount = createSelector(getTodos, (todos) => todos.length);

//리듀서
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat(action.payload);

    case REMOVE:
      return state.filter((todo) => action.payload !== todo.id);

    case TOGGLE:
      return state.map((todo) =>
        action.payload === todo.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};

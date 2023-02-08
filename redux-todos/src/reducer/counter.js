import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//액션 타입 정의
export const INCREASE = "INCREASE";
export const DECREASE = "RECREASE";

// 액션 객체를 생성하는 함수
export function increaseNum() {
  return { type: INCREASE };
}

export const decreaseNum = () => ({ type: DECREASE });

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case increasement.type:
      return state + action.payload;
    case decreasement.type:
      return state - action.payload;
    default:
      return state;
  }
}
// createAction() : 액션을 발생시키는 함수와 타입을 동시에 만든다.
// export const increasement = createAction("counter/increasment");
// export const decreasement = createAction("counter/decreasement");

// createReducer() : 리듀서를 만든다. 객체 혹은 콜백함수를 전달한다.
// const counter = createReducer(0, {
//   [increasement.type]: (state, action) => {
//     return state + action.payload;
//   },
//   [decreasement.type]: (state, action) => {
//     return state - action.payload;
//   },
// });

// 콜백함수 Builder 객체가 전달된다.
// const counter = createReducer(0, (builber) => {
//   builber
//     .addCase(increasement, (state, action) => {
//       return state + action.payload;
//     })
//     .addCase(decreasement, (state, action) => {
//       return state - action.payload;
//     });
// });

// 액션 생성 함수와 리듀서를 동시에 만든다.
const counterSilce = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increasement: (state, action) => state + action.payload,
    decreasement: (state, action) => state - action.payload,
  },
});

export const { increasement, decreasement } = counterSilce.actions;

const counter = counterSilce.reducer;

export default counter;

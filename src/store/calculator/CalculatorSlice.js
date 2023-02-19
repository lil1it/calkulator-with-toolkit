import { createSlice } from "@reduxjs/toolkit";

// export const calculatorActionType = {
//     ADD: "ADD",
//     SUBTRACT: "SUBTRACT",
//     MULTIPLY: "MULTIPLY",
//     DIVIDE: "DIVIDE",
//   };

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
      console.log(state);
    },
    subtract(state, action) {
      state.result = state.result - action.payload;
    },
    divide(state, action) {
      state.result = state.result / action.payload;
    },
    multiply(state, action) {
      state.result = state.result * action.payload;
    },
  },
});

export const calculatorActionType = calculatorSlice.actions;

//  export const calculatorReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case calculatorActionType.ADD:
//         return { ...state, result: state.result + action.payload };
//       case calculatorActionType.SUBTRACT:
//         return { ...state, result: state.result - action.payload };
//       case calculatorActionType.DIVIDE:
//         return { ...state, result: state.result / action.payload };
//       case calculatorActionType.MULTIPLY:
//         return { ...state, result: state.result * action.payload };
//       default:
//         return state;
//     }
//   };

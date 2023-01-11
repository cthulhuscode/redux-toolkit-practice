import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /** This functions are the reducers not the actions,
     * here we write the reducer's definition
     */
    increment: (state) => {
      /* Redux Toolkit allow us to write "mutating" logic in reducers. 
        it doesn't actually mutate the state. Detects changes to a "draft state"
        and produces a brand new immutable state based off those changes.
      */
      state.counter++;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});

// Action creators are generated for each case reducer function
// These are the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

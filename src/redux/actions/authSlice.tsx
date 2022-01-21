import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IValue {
    value : string;
}

const initialState: IValue = {
    value : ""
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string | any>) => {
      state.value = action.payload;
    },
  },
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
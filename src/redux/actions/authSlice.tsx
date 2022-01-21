import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IValue {
    value : string;
    isAuth : boolean;
}

const initialState: IValue = {
    value : "",
    isAuth : false
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
      state.isAuth= true
    },
  },
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
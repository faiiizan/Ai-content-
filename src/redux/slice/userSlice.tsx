import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} as User,
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

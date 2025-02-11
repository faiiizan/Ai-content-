import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  role: string;
}

const initialState = {
  user: {} as UserState,
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

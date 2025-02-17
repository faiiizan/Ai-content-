import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscription: {} as Subscription,
};

export const subscriptionSlice = createSlice({
  name: "userSubscription",
  initialState,
  reducers: {
    setUserSubscription: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { setUserSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;

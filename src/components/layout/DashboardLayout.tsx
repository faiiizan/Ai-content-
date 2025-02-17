import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";
import axiosInstance from "@/utils/axios";
// @ts-ignore
import Cookies from "js-cookie";
import { setUserSubscription } from "@/redux/slice/subscriptionSlice";
import { RootState } from "@/redux/store";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        dispatch(setUser(JSON.parse(storedUser)));
      } catch (error) {
        console.error("Invalid cookie data", error);
      }
    }
  }, []);

  // calling user data from redux state
  const user = useSelector((state: RootState) => state.userData.user);

  const getUserSubscription = async (userId: string) => {
    try {
      const userSubs = await axiosInstance.post(
        "/ai/subscription/get-subscription",
        { userId: userId }
      );
      dispatch(setUserSubscription(userSubs.data.subscription));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!user && !token) {
      router.push("/login");
    }
    if (user) {
      getUserSubscription(user._id);
    }
  }, [user, token]);

  return <div>{children}</div>;
}

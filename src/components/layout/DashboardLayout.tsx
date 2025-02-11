import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";
// @ts-ignore
import Cookies from "js-cookie";
import { RootState } from "@/redux/store";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const token = Cookies.get("token");
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid cookie data", error);
      }
    }
  }, []);

  //calling user data from redux state
  // const user = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    if (!user && !token) {
      router.push("/login");
    }
  }, [user, token]);

  // console.log("🚀 ~ user:", user);
  // console.log("🚀 ~ token:", token);
  return <div>{children}</div>;
}

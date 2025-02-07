import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
// @ts-ignore
import Cookies from "js-cookie";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const token = Cookies.get("token");
  let user = Cookies.get("user");
  // if(user) {
  //     user = JSON.parse(user)
  // }

  useEffect(() => {
    if (!user && !token) {
      router.push("/login");
    }
  }, [user, token]);

  console.log("🚀 ~ user:", user);
  console.log("🚀 ~ token:", token);
  return <div>{children}</div>;
}

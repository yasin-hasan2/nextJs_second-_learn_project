import { NextResponse } from "next/server";

const user = true;

const coo = "next-superhero";

export const middleware = (request) => {
  const cookies = request.cookies.get("token");
  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/dashboard",

  // this is normal step

  // export const middleware = (request) => {
  //   return NextResponse.redirect(new URL("/about", request.url));
  // };

  // export const config = {
  //   matcher: "/user-profile",
};

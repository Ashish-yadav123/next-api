import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  const data = await response.json(); // Await the response.json() call
  // console.log("Data:", data);
  return NextResponse.json({ data });
}

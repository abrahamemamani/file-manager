import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`https://dummyjson.com/users/`);
  const data = await res.json();

  return NextResponse.json({ data });
}

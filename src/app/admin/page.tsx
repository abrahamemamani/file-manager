"use client";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/admin/dashboard");
  return <div>Page Admin</div>;
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Confirm() {
  const router = useRouter();
  const data = useSearchParams();
  console.log(data.get("data"));
}

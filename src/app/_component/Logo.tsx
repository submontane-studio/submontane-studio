"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const current: string = usePathname();

  return current === "/" ? (
    <h1 className="logo">{children}</h1>
  ) : (
    <p className="logo">
      <Link href="/">{children}</Link>
    </p>
  );
}

import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Heading({ className, children }: Props) {
  return (
    <>
      <h2 className="heading">{children}</h2>
    </>
  );
}

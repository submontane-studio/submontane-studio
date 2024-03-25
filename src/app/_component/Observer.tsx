"use client";

import { useInView } from "react-intersection-observer";

export default function Observer({
  children,
  classNameInView,
  initialInView,
}: {
  children: React.ReactNode;
  classNameInView?: string | undefined;
  initialInView: boolean;
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    initialInView: initialInView,
    rootMargin: "-84px",
  });

  return (
    <div ref={ref} className={`is-observer ${!inView ? classNameInView : ""}`}>
      {children}
    </div>
  );
}

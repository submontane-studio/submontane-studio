"use client";

import { useEffect, useState } from "react";
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
  const [offsetHeight, setOffsetHeight] = useState(0);

  useEffect(() => {
    const ob = (document.querySelector(".is-observer") as HTMLElement)
      ?.offsetHeight;
    setOffsetHeight(ob || 0);
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    initialInView: initialInView,
    rootMargin: `-${offsetHeight}px`,
  });

  return (
    <div ref={ref} className={`is-observer ${!inView ? classNameInView : ""}`}>
      {children}
    </div>
  );
}

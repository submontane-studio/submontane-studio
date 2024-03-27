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
  const [parent, setParent] = useState<string | null>(null);

  useEffect(() => {
    const ob = (document.querySelector(".is-observer") as HTMLElement)
      ?.offsetHeight;
    setOffsetHeight(ob || 0);

    const parent = document
      .querySelector(".is-observer")
      ?.parentElement?.classList.contains("is-blog")
      ? "is-blog"
      : null;
    setParent(parent);
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    initialInView: initialInView,
    rootMargin: `-${offsetHeight}px`,
  });

  return (
    <div
      ref={ref}
      className={`is-observer ${
        !inView && parent !== "is-blog" ? classNameInView : ""
      }`}
    >
      {children}
    </div>
  );
}

"use client";
import { useEffect } from "react";

export default function useSmoothScroll(speed) {
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();

      let final = window.scrollBy({
        top: e.deltaY * speed,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [speed]);
}

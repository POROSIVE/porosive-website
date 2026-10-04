"use client"
import React, { useEffect, useRef, useState } from "react";

type FadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Fades({children, delay = 0, className = ""}: FadeProps) {
  const elemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={elemRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
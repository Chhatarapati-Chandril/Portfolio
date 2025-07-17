import React, { useRef, useLayoutEffect, useState, useMemo } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

// ✅ Stable width measurement hook
function useStableElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) setWidth(ref.current.offsetWidth);

    const handleResize = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// ✅ Smooth infinite scrolling text
export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  numCopies = 6,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  const VelocityText: React.FC<VelocityTextProps> = ({
    children,
    baseVelocity,
    className = "",
    numCopies,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) => {
    const baseX = useMotionValue(0);
    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useStableElementWidth(copyRef);
    const direction = Math.sign(baseVelocity || 1);

    const wrap = (min: number, max: number, v: number): number => {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    };

    const x = useTransform(baseX, (v) =>
      copyWidth === 0 ? "0px" : `${wrap(-copyWidth, 0, v)}px`
    );

    useAnimationFrame((t, delta) => {
      const moveBy = direction * Math.abs(baseVelocity) * (delta / 1000);
      baseX.set(baseX.get() + moveBy);
    });

    const spans = useMemo(
      () =>
        Array.from({ length: numCopies! }).map((_, i) => (
          <span
            className={`flex-shrink-0 ${className}`}
            key={i}
            ref={i === 0 ? copyRef : null}
          >
            {children}
          </span>
        )),
      [children, className, numCopies]
    );

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={{ userSelect: "none", ...parallaxStyle }}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
          style={{
            x,
            willChange: "transform",
            ...scrollerStyle,
          }}
        >
          {spans}
        </motion.div>
      </div>
    );
  };

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
          className={index === 0 ? `gradient-text ${className}` : className}
          numCopies={numCopies}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;

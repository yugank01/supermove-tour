import { MotionStyle, MotionValue } from "framer-motion";

/**
 * Animating CSS variables with types for Framer Motion.
 * This wrapper function ensures proper type checking for motion values
 * and CSS variables.
 */
type MotionStyleWithCssVar = {
  [K in keyof MotionStyle as K | `--${string}`]:
    | MotionStyle[K]
    | MotionValue<number>
    | MotionValue<string>;
};

// Wrapper function to apply MotionStyleWithCssVar
export const stylesWithCssVar = (styles: MotionStyleWithCssVar) =>
  styles as MotionStyle;

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

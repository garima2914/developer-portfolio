"use client"

import AnimationLottie from "./animation-lottie";

export default function ClientAnimation({ animationPath, width }) {
  return <AnimationLottie animationPath={animationPath} width={width} />;
}

"use client"

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    // Dynamically import lottie-react only on the client to avoid SSR errors
    let mounted = true;
    import("lottie-react").then((mod) => {
      if (mounted) setLottieComponent(() => mod.default || mod);
    }).catch(() => {
      // ignore import errors in environments that block dynamic imports
    });

    return () => { mounted = false };
  }, []);

  if (!LottieComponent) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    }
  };

  return (
    <LottieComponent {...defaultOptions} />
  );
};

export default AnimationLottie;
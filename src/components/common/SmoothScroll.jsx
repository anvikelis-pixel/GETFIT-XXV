import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
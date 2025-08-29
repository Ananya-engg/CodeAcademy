import { useEffect } from "react";
import { sparkleConfig } from "../utils/particlesConfig";

export function useParticles(id) {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS(id, sparkleConfig);
    }
  }, [id]);
}

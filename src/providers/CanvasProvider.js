import React, { useRef, useEffect } from "react";

export function CanvasProvider({ script, style }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const callback = script(canvas);
    let observer;

    if (callback) {
      let ID;
      const animate = (time) => {
        callback(time);
        ID = requestAnimationFrame(animate);
      };

      observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          ID = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(ID);
        }
      });
      observer.observe(canvas);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return <canvas style={style} ref={ref} />;
}

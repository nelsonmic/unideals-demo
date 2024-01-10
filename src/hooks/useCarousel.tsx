import { useEffect, useState, useRef } from "react";

export const useCarousel = (slides: string[]) => {
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  const resetTimeout = () => {
    timeoutRef.current ? clearTimeout(timeoutRef.current) : null;
  };
  const next = () => {
      setIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      )
    };
  
    const prev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      resetTimeout();
    };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [index, slides.length]);

  return { index, setIndex, controls: {next, prev} };
};

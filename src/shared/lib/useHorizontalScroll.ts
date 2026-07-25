import { useRef, useState } from "react";

export const useHorizontalScroll = (step = 200) => {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const slider = ref.current;

    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 0);

    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1,
    );
  };

  const scrollRight = () => {
    ref.current?.scrollBy({
      left: step,
    });
  };
  const scrollLeft = () => {
    ref.current?.scrollBy({
      left: -step,
    });
  };

  return {
    ref,
    canScrollLeft,
    canScrollRight,
    checkScroll,
    scrollLeft,
    scrollRight,
  };
};

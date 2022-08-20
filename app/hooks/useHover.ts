import { useState, useCallback } from "react";

type useHover = {
  isHovering: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

const useHover = (): useHover => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return {
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHover;

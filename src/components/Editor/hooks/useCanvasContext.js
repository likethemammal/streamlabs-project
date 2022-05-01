import { useEffect, useState } from "react";

export default function useCanvasContext(canvas) {
  const [state, setState] = useState({});

  useEffect(() => {
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    const boundingBox = canvas.getBoundingClientRect();

    const { left: offsetX, top: offsetY } = boundingBox;

    const { width, height } = canvas;

    setState({
      canvas,
      context,
      boundingBox,
      offsetX,
      offsetY,
      width,
      height
    });
  }, [canvas]);

  return {
    ...state
  };
}

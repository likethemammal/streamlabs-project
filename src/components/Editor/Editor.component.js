import React, { useEffect, useRef, useState } from "react";
import { useElementSize } from "usehooks-ts";

import useDragOnCanvas from "./hooks/useDragOnCanvas";
import useCanvasContext from "./hooks/useCanvasContext";
import useItemsWithDrag from "./hooks/useItemsWithDrag";
import useItemsWithImages from "./hooks/useItemsWithImages";
import useDraw from "./hooks/useDraw";

import { Container, Canvas } from "./Editor.styles";

import { shapes } from "./Editor.constants";

export default function Editor() {
  const ref = useRef();
  const [
    setCanvasRef,
    { width: canvasWidth, height: canvasHeight }
  ] = useElementSize();

  const { canvas, context, offsetX, offsetY } =
    useCanvasContext(ref.current) || {};

  const [items, setItems] = useState([...shapes]);

  const { isDown, isUp, mouse, start, setStart } = useDragOnCanvas({
    canvas,
    offsetX,
    offsetY
  });

  const itemsWithDrag = useItemsWithDrag({
    items,
    setItems,
    start,
    setStart,
    mouse,
    isDown,
    isUp
  });

  const dragged = itemsWithDrag.filter(({ isDragging }) => isDragging);

  useItemsWithImages({
    items,
    setItems
  });

  useDraw({
    canvas,
    context,
    canvasWidth,
    canvasHeight,
    items: itemsWithDrag,
    isDown,
    isUp
  });

  useEffect(() => {
    setCanvasRef(ref.current);
  }, [ref.current]);

  return (
    <Container>
      <Canvas ref={ref} width={canvasWidth} height={canvasHeight} />
    </Container>
  );
}

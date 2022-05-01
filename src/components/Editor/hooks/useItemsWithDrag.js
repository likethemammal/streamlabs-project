import { useEffect, useState } from "react";

import _ from "lodash";

const useItemsWithDrag = ({
  isUp,
  isDown,
  mouse,
  setStart,
  start,
  items,
  setItems
}) => {
  const [itemsWithDrag, setItemsWithDrag] = useState(items);

  // on up
  useEffect(() => {
    if (!isUp) {
      return;
    }

    const itemsWithIsDragging = itemsWithDrag.map((item, i) => {
      return {
        ...item,
        isDragging: false
      };
    });

    setItemsWithDrag(itemsWithIsDragging);
  }, [mouse, isUp]);

  // on down
  useEffect(() => {
    if (!isDown) {
      return;
    }

    const { x: mouseX, y: mouseY } = mouse;

    const itemsWithIsDragging = itemsWithDrag.map((shape, i) => {
      const {
        x: shapeX,
        y: shapeY,
        width: shapeWidth,
        height: shapeHeight
      } = shape;

      const isMouseOverShape =
        mouseX > shapeX &&
        mouseX < shapeX + shapeWidth &&
        mouseY > shapeY &&
        mouseY < shapeY + shapeHeight;

      console.log({
        isMouseOverShape
      });

      if (!isMouseOverShape) {
        return {
          ...shape,
          isDragging: false
        };
      }

      return {
        ...shape,
        isDragging: true
      };
    });

    const itemsWithDraggingSorted = _.sortBy(
      itemsWithIsDragging,
      ({ isDragging }) => isDragging
    );

    setItemsWithDrag(() => itemsWithDraggingSorted);
  }, [mouse, isDown]);

  // on move
  useEffect(() => {
    if (!isDown) {
      return;
    }

    const { x: mouseX, y: mouseY } = mouse;
    const { x: startX, y: startY } = start;

    // Calculate the distance the mouse has moved
    const deltaX = mouseX - startX;
    const deltaY = mouseY - startY;

    console.log(items);

    // Move each item that isDragging
    const itemsWithDragging = itemsWithDrag.map((item, i) => {
      const { isDragging, x, y } = item;

      if (!isDragging) {
        return item;
      }

      return {
        ...item,
        x: x + deltaX,
        y: y + deltaY
      };
    });

    setItemsWithDrag(() => itemsWithDragging);
    setStart(mouse);
  }, [mouse]);

  return itemsWithDrag;
};

export default useItemsWithDrag;

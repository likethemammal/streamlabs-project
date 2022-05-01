import { useTheme } from "@emotion/react";
import { useEffect } from "react";

export default function useDraw({
  canvas,
  context,
  canvasWidth,
  canvasHeight,
  items,
  isDown,
  isUp
}) {
  const theme = useTheme();
  const Xs = items.map(({ x }) => x);
  const Ys = items.map(({ y }) => y);

  // draw a single rect
  function rect(...args) {
    context.beginPath();
    context.rect(...args);
    context.closePath();
    context.fill();
  }

  const clear = () => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  const draw = () => {
    clear();

    context.fillStyle = theme.colors.BACKGROUND;

    rect(0, 0, canvasWidth, canvasHeight);

    items.map(({ fill, x, y, width, height, isDragging, image }) => {
      const borderSize = 3;
      isDragging = isDown ? isDragging : false;

      const checkEdge = (position, size, edge) => {
        // handle origin edge
        position = position > borderSize ? position : borderSize;

        const farEdge = position + borderSize + size;

        // handle far edge
        position = farEdge > edge ? edge - (size + borderSize * 2) : position;

        return position;
      };

      // prevent rect edge from leaving canvas
      x = checkEdge(x, width, canvasWidth);
      y = checkEdge(y, height, canvasHeight);

      // scale image slightly on drag
      const scale = isDragging ? 1.1 : 1;

      const scaledWidth = width * scale;
      const scaledHeight = height * scale;

      const outlineWidth = scaledWidth + borderSize * 2;
      const outlineHeight = scaledHeight + borderSize * 2;

      // outline rect draw
      if (isDragging) {
        context.fillStyle = theme.colors.BORDER;
        rect(x - borderSize, y - borderSize, outlineWidth, outlineHeight);
      }

      // rect/image draw
      if (image) {
        context.drawImage(image, x, y, scaledWidth, scaledHeight);
      } else {
        context.fillStyle = fill;
        rect(x, y, scaledWidth, scaledHeight);
      }
    });
  };

  useEffect(() => {
    if (!canvas) {
      return;
    }

    draw();
  }, [isUp, isDown, Xs, Ys, canvas]);
}

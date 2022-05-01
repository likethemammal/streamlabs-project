import { useEffect, useState } from "react";

function getMousePosition(e, offsetX, offsetY) {
  const { clientX, clientY } = e;

  return {
    x: parseInt(clientX - offsetX),
    y: parseInt(clientY - offsetY)
  };
}

const createDragEventFactory = (handle) => (e) => {
  e.preventDefault();
  e.stopPropagation();

  handle(e);
};

const useDragEvents = ({
  canvas,
  handleDown = () => {},
  handleUp = () => {},
  handleMove = () => {}
}) => {
  useEffect(() => {
    if (!canvas) {
      return;
    }

    // listen for mouse events
    canvas.onmousedown = createDragEventFactory(handleDown);
    canvas.onmouseup = createDragEventFactory(handleUp);
    canvas.onmousemove = createDragEventFactory(handleMove);
  }, [canvas]);
};

const useDragOnCanvas = ({ canvas, offsetX, offsetY }) => {
  const [isDown, setIsDown] = useState(false);
  const [isUp, setIsUp] = useState(false);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleDown = (e) => {
    const newMouse = getMousePosition(e, offsetX, offsetY);

    setMouse(newMouse);
    setStart(newMouse);

    setIsDown(true);
    setIsUp(false);
  };

  const handleUp = (e) => {
    setIsDown(false);
    setIsUp(true);
  };

  const handleMove = (e) => {
    const newMouse = getMousePosition(e, offsetX, offsetY);

    setMouse(newMouse);
  };

  useDragEvents({
    canvas,
    handleDown,
    handleMove,
    handleUp
  });

  return {
    isDown,
    isUp,
    mouse,
    start,
    setStart
  };
};

export default useDragOnCanvas;

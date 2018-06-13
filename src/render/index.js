import { createDrawBoard } from "./shapes";

/**
 *  ctx.canvas.width = container.clientWidth resizes canvas to fit it's container
 *  and whenever this function is called - canvas gets cleaned because of this.
 * */
export const createClearCanvas = (container: number, canvas) => () => {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
};

const createElements = () => {};

export const createRedraw = (context, canvas) => {
  const drawBoard = createDrawBoard(context);
  return data => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard({
      width: canvas.width * 0.9,
      height: canvas.height * 0.9,
      offset: 10,
      stepSize: 10,
      color: "gray"
    });
  };
};

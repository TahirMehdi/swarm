/**
 *  ctx.canvas.width = container.clientWidth resizes canvas to fit it's container
 *  and whenever this function is called - canvas gets cleaned because of this.
 * */
export const createClearCanvas = (container, canvas) => () => {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
};
export function drawPoint(context, pointSize, [a, b]) {
  context.beginPath();
  context.arc(a, b, pointSize, Math.PI * 2, 0, false);
  context.moveTo(a, b);
  context.strokeStyle = "red";
  context.stroke();
}

function drawBoard(context, bw, bh, p) {
  context.beginPath();
  for (var x = 0; x <= bw; x += 10) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += 10) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }

  context.strokeStyle = "black";
  context.stroke();
}

export const createGrid = context => {
  drawBoard(context, 400, 400, 50);
};

export const createRedraw = context => data => {
  context.clearRect(0, 0, 400, 400);
  //   const container = localDocument.getElementsByClassName("container")[0];
  //   ctx.canvas.width = container.clientWidth;
  //   ctx.canvas.height = container.clientHeight;
  //TODO something with "data"
  //drawPoint(context, 15, [25, 50]);
  createGrid(context);
};

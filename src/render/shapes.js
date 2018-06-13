import { createRectCoordsFromCenterPosition } from "./geo-math";

const TAU = Math.PI * 2;

export const drawCircle = ({
  context: ctx,
  radius,
  coord: { x, y },
  color,
  filled
}) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, TAU, 0, false);
  ctx.moveTo(x, y);
  filled
    ? ((ctx.fillStyle = color), ctx.fill())
    : ((ctx.strokeStyle = color), ctx.stroke());
};

export const drawRect = ({
  context: ctx,
  coord: { a, b, c, d },
  color,
  filled
}) => {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.lineTo(d.x, d.y);
  ctx.lineTo(a.x, a.y);
  filled
    ? ((ctx.fillStyle = color), ctx.fill())
    : ((ctx.strokeStyle = color), ctx.stroke());
};
export const createRectOnBoard = props:any => {
  drawRect({
    ...props,
    coord: createRectCoordsFromCenterPosition(props)
  });
};
export const createDrawBoard = ctx => ({ width, height, stepSize, color }) => {
  const z = 0.5;
  const offset = 0;
  ctx.beginPath();
  for (var x = 0; x <= width; x += stepSize) {
    ctx.moveTo(z + x + offset, offset);
    ctx.lineTo(z + x + offset, height + offset);
  }
  for (var x = 0; x <= height; x += stepSize) {
    ctx.moveTo(offset, z + x + offset);
    ctx.lineTo(width + offset, z + x + offset);
  }
  ctx.strokeStyle = color;
  ctx.stroke();

  createRectOnBoard({
    context: ctx,
    color: "blue",
    coord: { x: 5, y: 5 },
    radius: stepSize / 2,
    filled: true
  });
};

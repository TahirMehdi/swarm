export const find4PointOfRect = ({ a, b, c }) => ({
  x: c.x - b.x + a.x,
  y: c.y - b.y + a.y
});

export const centerOfLine = (a, b) => ({
  x: (a.x + b.x) / 2,
  y: (a.y + b.y) / 2
});

export const centerOfRect = ({ a, c }) => centerOfLine(a, c);

export const areaOfRect = ({ a, b, c }) =>
  Math.abs(a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));

export const distanceBetweenPoints = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

export const isPointInsideCircle = (point, circleRadius, circleCenter) =>
  distanceBetweenPoints(point, circleCenter) <= circleRadius;

export const transformPositionToCoord = ({ coord: { x, y }, radius }) => ({
  coord: {
    x: 0.5 + radius + radius * 2 * x,
    y: 0.5 + radius + radius * 2 * y
  },
  radius
});

export const createRectCoordsFromCenter = ({ coord: { x, y }, radius }) => ({
  a: { x: x - radius, y: y - radius },
  b: { x: x + radius, y: y - radius },
  c: { x: x + radius, y: y + radius },
  d: { x: x - radius, y: y + radius }
});

export const createRectCoordsFromCenterPosition = props =>
  createRectCoordsFromCenter(transformPositionToCoord(props));

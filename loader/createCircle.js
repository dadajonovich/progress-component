import { setAttributes } from './utils/setAttributes.js';

export function createCircle({ size, halfSize, radius, strokeWidth, color }) {
  const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );

  setAttributes(circle, {
    cx: String(halfSize),
    cy: String(halfSize),
    r: String(radius),
    fill: 'transparent',
    stroke: color,
    'stroke-width': String(strokeWidth),
    transform: `translate(0, ${size}) rotate(-90)`,
  });

  return circle;
}

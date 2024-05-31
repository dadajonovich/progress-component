import { setAttributes } from './utils/setAttributes.js';

function createCircle({ size, halfSize, radius, strokeWidth, color }) {
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

export function createLoader({
  size = 100,
  strokeWidth = 10,
  value = 100,
  animationSpeed = 3000,
  transitionSpeed = 1000,
  className = '',
} = {}) {
  const container = document.createElement('div');
  container.classList.add('lib-loader');
  if (className) container.classList.add(className);
  container.style.width = `${size}px`;
  container.style.height = `${size}px`;

  const halfSize = size / 2;
  const radius = halfSize - strokeWidth / 2;
  const circleLength = 2 * Math.PI * radius;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  setAttributes(svg, { height: String(size), width: String(size) });

  const circleGray = createCircle({
    size,
    halfSize,
    radius,
    strokeWidth,
    color: '#eaf0f6',
  });

  const circle = createCircle({
    size,
    halfSize,
    radius,
    strokeWidth,
    color: '#324ff9',
  });

  svg.append(circleGray);
  svg.append(circle);
  container.append(svg);

  container.setIsHidden = (isHidden) => {
    container.setAttribute('style', `visibility: ${isHidden ? 'hidden' : ''}`);
  };
  container.setIsAnimated = (isAnimated) => {
    svg.setAttribute(
      'style',
      `animation: ${
        isAnimated ? `loader-rotation linear ${animationSpeed}ms infinite` : ''
      }`
    );
  };
  container.setValue = (value) => {
    if (value > 100) value = 100;
    if (value < 0) value = 0;

    const valuePercent = (100 - value) / 100;

    circle.setAttribute(
      'style',
      `
          stroke-dasharray: ${circleLength};
          stroke-dashoffset: ${circleLength * valuePercent};
          transition: stroke-dashoffset ${transitionSpeed}ms;
        `
    );
  };
  container.setValue(value);

  return container;
}

const link = document.createElement('link');
setAttributes(link, { href: '/loader/loader.css', rel: 'stylesheet' });

document.head.append(link);

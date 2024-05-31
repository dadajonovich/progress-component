function createCircle({ size, halfSize, radius, strokeWidth, color }) {
  const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circle.setAttribute('cx', String(halfSize));
  circle.setAttribute('cy', String(halfSize));
  circle.setAttribute('r', String(radius));
  circle.setAttribute('fill', 'transparent');
  circle.setAttribute('stroke', color);
  circle.setAttribute('stroke-width', String(strokeWidth));
  circle.setAttribute('transform', `translate(0, ${size}) rotate(-90)`);

  return circle;
}

function createLoader({
  size = 100,
  strokeWidth = 10,
  value = 100,
  animationSpeed = 3000,
  transitionSpeed = 1000,
  className = '',
} = {}) {
  const container = document.createElement('div');
  container.classList.add('loader', className || undefined);
  container.style.width = `${size}px`;
  container.style.height = `${size}px`;

  const halfSize = size / 2;
  const radius = halfSize - strokeWidth / 2;
  const circleLength = 2 * Math.PI * radius;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', String(size));
  svg.setAttribute('width', String(size));

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

document.addEventListener('DOMContentLoaded', () => {
  const loader = createLoader({
    size: 100,
    strokeWidth: 10,
    value: 10,
  });

  document.body.append(loader);

  loader.setIsAnimated(true);

  setTimeout(() => {
    loader.setValue(33);
    setTimeout(() => {
      loader.setValue(66);

      setTimeout(() => {
        loader.setValue(100);

        setTimeout(() => {
          loader.setIsHidden(true);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500);
});

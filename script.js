import { createLoader } from './loader/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const switchAnimated = document.getElementById('animated-control');
  const switchHide = document.getElementById('hide-control');
  const inputValue = document.getElementById('value-control');

  const loader = createLoader({
    size: 200,
    strokeWidth: 20,
    value: inputValue.value,
    className: 'loader',
    isAnimated: switchAnimated.checked,
    isHide: switchHide.checked,
  });

  inputValue.addEventListener('input', (e) => {
    let value = parseFloat(e.target.value);
    if (isNaN(value)) return;
    if (value > 100) value = 100;
    if (value < 0) value = 0;
    if (value) e.target.value = value;

    loader.setValue(value);
  });

  inputValue.addEventListener('blur', (e) => {
    if (!e.target.value) {
      e.target.value = 0;
      loader.setValue(0);
    }
  });

  switchAnimated.addEventListener('input', (e) => {
    loader.setIsAnimated(e.target.checked);
  });

  switchHide.addEventListener('input', (e) => {
    loader.setIsHidden(e.target.checked);
  });

  const view = document.getElementById('view');
  view.append(loader);
});

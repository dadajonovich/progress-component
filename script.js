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
    let value = Number(e.target.value);
    if (value > 100) value = 100;
    if (value < 0) value = 0;

    e.target.value = value;

    loader.setValue(value);
  });

  switchAnimated.addEventListener('input', (e) => {
    loader.setIsAnimated(e.target.checked);
  });

  switchHide.addEventListener('input', (e) => {
    loader.setIsHidden(e.target.checked);
  });

  const view = document.getElementById('view');
  view.append(loader);

  // setTimeout(() => {
  //   loader.setValue(33);
  //   setTimeout(() => {
  //     loader.setValue(66);

  //     setTimeout(() => {
  //       loader.setValue(100);

  //       setTimeout(() => {
  //         loader.setIsHidden(true);
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }, 500);
});

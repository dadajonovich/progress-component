import { createLoader } from './loader/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const switchAnimated = document.getElementById('animated-control');
  const switchHide = document.getElementById('hide-control');
  const inputValue = document.getElementById('value-control');
  console.log(switchHide.checked);

  const loader = createLoader({
    size: 140,
    strokeWidth: 14,
    value: inputValue.value,
    className: 'loader',
    isAnimated: switchAnimated.checked,
    isHide: switchHide.checked,
  });

  inputValue.addEventListener('input', (e) => {
    loader.setValue(e.target.value);
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

import { createLoader } from './loader/loader.js';

document.addEventListener('DOMContentLoaded', () => {
  const loader = createLoader({
    size: 140,
    strokeWidth: 14,
    value: 10,
    className: 'loader',
  });

  const view = document.getElementById('view');
  view.append(loader);

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

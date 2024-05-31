import { createLoader } from './loader/loader.js';

document.addEventListener('DOMContentLoaded', () => {
  const loader = createLoader({
    size: 100,
    strokeWidth: 10,
    value: 10,
    className: '',
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

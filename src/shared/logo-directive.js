/* eslint no-param-reassign: "error" */
export default {
  bind: (element) => {
    element.style.verticalAlign = 'middle';
    element.style.height = '50px';

    element.addEventListener('mouseenter', () => {
      element.style.filter = 'grayscale(100%)';
      element.style.height = '75px';
    });
    element.addEventListener('mouseleave', () => {
      element.style.filter = 'grayscale(0%)';
      element.style.height = '50px';
    });
  },
};

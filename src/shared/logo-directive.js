/* eslint no-param-reassign: "error" */
export default function (element, binding) {
  const { effect } = binding.value;
  const { height } = binding.value;

  element.style.verticalAlign = 'middle';
  element.style.height = '50px';

  element.addEventListener('mouseenter', () => {
    element.style.filter = `${effect}`;
    element.style.height = `${height}`;
  });
  element.addEventListener('mouseleave', () => {
    element.style.filter = 'initial';
    element.style.height = '50px';
  });
}

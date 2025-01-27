const heading = document.querySelector('#heading');

const keyFrames = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};
const options = {
  duration: 1000,
  easing: 'ease',
};

heading.animate(keyFrames, options);
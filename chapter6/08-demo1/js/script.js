const heading = document.querySelector('#heading');

const keyFrames = {
  opacity: [0, 1],
  rotate: ['x 360deg', 0],
};
const options = {
  duration: 1000,
  easing: 'ease',
};

heading.animate(keyFrames, options);
const heading = document.querySelector('#heading');

const keyFrames = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};
const options = {
  duration: 2000,
  easing: 'ease',
};

heading.animate(keyFrames, options);
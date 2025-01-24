const getScrollPercent = () => {
  const scrolled = window.scrollY;
  console.log(`${scrolled} スクロールされました`);
};

window.addEventListener('scroll', getScrollPercent);
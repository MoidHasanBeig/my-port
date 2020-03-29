function getScreenHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

var resizeTimeout;
function resizeThrottler() {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if ( !resizeTimeout ) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      actualResizeHandler();
     // The actualResizeHandler will execute at a rate of 15fps
     }, 66);
  }
}

function actualResizeHandler() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export {
  getScreenHeight,
  resizeThrottler
}

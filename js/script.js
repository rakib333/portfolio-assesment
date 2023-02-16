// smooth scrolling function

function smoothScroll(target, duration) {
  let setTarget = document.querySelector(target);
  let targetPosition = setTarget.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const about = document.querySelector("#about");
const portfolio = document.querySelector("#portfolio");
const testimonial = document.querySelector("#testimonial");
const contact = document.querySelector("#contact");

about.addEventListener("click", function () {
  smoothScroll("#about-section", 1500);
});
portfolio.addEventListener("click", function () {
  smoothScroll("#portfolio-section", 2000);
});
testimonial.addEventListener("click", function () {
  smoothScroll("#about-section", 1500);
});
contact.addEventListener("click", function () {
  smoothScroll("#about-section", 1500);
});

// filter the projects
document.getElementById("filter-btn").addEventListener("click", filterNames);
function filterNames() {
  let filterArray = [];
  // get the value of input
  const getInput = document.getElementById("filter-input").value;
}

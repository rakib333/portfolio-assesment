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
  smoothScroll("#about-section", 1000);
});
portfolio.addEventListener("click", function () {
  smoothScroll("#portfolio-section", 1000);
});
testimonial.addEventListener("click", function () {
  smoothScroll("#testimonial-section", 1000);
});
contact.addEventListener("click", function () {
  smoothScroll("#contact-section", 500);
});

// filter the projects
const search = () => {
    const searchBox = document.getElementById('filter-input').value.toLowerCase();
    let parentDiv = document.getElementById('filter-parent');
    let elements = document.querySelectorAll('.card');
    let titles = parentDiv.getElementsByTagName('a');

    for (let i = 0; i < titles.length; i++){
        let matched = elements[i].getElementsByTagName('a')[0];
        if (matched) {
            let textValue = matched.textContent || matched.innerHTML;
            if (textValue.toLowerCase().indexOf(searchBox) > -1) {
                elements[i].style.display = "";
            }
            else {
                elements[i].style.display = "none"
            }
        }
    }

    document.getElementById('filter-input').value = '';
}


// contact form validation
document.getElementById('submit-btn').addEventListener('click', function () {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const emailInput = document.getElementById('email-input');
  const passInput = document.getElementById('password-input');
  if (firstName.value === '') {
    const errMsg = document.getElementById('error-first-name');
    
    errMsg.innerText = 'Please input your first name'
  }
  else if (lastName.value === '') {
    const errMsg2 = document.getElementById('error-last-name');
    errMsg2.innerText = 'Please input your last name'
  }
  else if (emailInput.value === '') {
    const emailErr = document.getElementById('error-email');
    emailErr.innerText = 'Enter a valid email'
  }
    
  else if (passInput.value === '' || passInput.value.length <= 5) {
    const errPass = document.getElementById('error-pass');
    errPass.innerText = 'Pass should be at 6 character'
  }
    
    
  else {
    return true
  }

  
})
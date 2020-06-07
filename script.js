(function init() {
  /**
   * =================== SELECTIONS ==========================
   */
  const form = document.querySelector('.form');
  const nameField = document.querySelector('.name');
  const nameErrorDiv = document.querySelector('.form__error1');
  const toggleBtn = document.querySelector('.toggle-btn');
  const nameLabel = form.querySelector('.name-label');
  const phoneLabel = form.querySelector('.phone-label');
  const errorText2 = document.querySelector('.form__error2--text');
  const nameInput = document.querySelector('.name');
  const phoneInput = document.querySelector('.phone');
  const nextBtn = document.querySelector('.form__nav-btn');

  nameInput.focus();
  /**
   * =====================EVENT LISTENERS =====================
   */

  // TOGGLE BETWEEN PHONE AND EMAIL SIGNUP
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (toggleBtn.innerText === 'Use email instead') {
      toggleBtn.innerText = 'Use phone instead';
      phoneLabel.innerText = 'Email';
    } else {
      toggleBtn.innerText = 'Use email instead';
      phoneLabel.innerText = 'Phone';
    }
    // Reset error message
    errorText2.innerText = '';
    // Reset input field
    phoneInput.value = '';
    // when button is toggled disable next button if enabled
    nextBtn.style.cssText = 'opacity: .5; pointer-events: none';
  });

  form.addEventListener('input', (e) => {
    if (e.target.matches('.name')) {
      increaseCounter();
      validateName();
      validateNameLength();
    }
    if (e.target.matches('.phone')) {
      validatePhone();
      validateEmail();
      showNextBtn();
    }
  });

  nextBtn.onclick = (e) => {
    e.preventDefault();
    const container = document.querySelector('.success');
    // shows gif animation for successful validation
    container.classList.add('success__show');
  };

  /**
   * ========================== FUNCTIONS ====================
   */

  // FUNCTION TO VALIDATE NAME LENGTH
  const validateNameLength = () => {
    nameInput.addEventListener('keydown', (e) => {
      if (nameInput.value.length >= 50 && e.code !== 'Backspace')
        event.preventDefault();
    });
  };

  // FUNCTION TO INCREASE COUNTER
  const increaseCounter = () => {
    const counter = nameErrorDiv.querySelector('span');
    counter.innerText = nameInput.value.length;
  };

  // FUNCTION TO VALIDATE EMPTY NAME
  const nameErrorText = form.querySelector('.form__error1--text');
  const validateName = () => {
    if (nameInput.value === '') {
      nameErrorText.innerText = "What's your name?";
      nameField.setAttribute('id', 'error-bottom');
      nameLabel.setAttribute('id', 'error');
      return false;
    } else {
      nameErrorText.innerText = '';
      nameField.removeAttribute('id', 'error-bottom');
      nameLabel.removeAttribute('id', 'error');
      return true;
    }
  };

  // FUNCTION TO VALIDATE PHONE INPUT
  const validatePhone = () => {
    // Regular expression to validate Nigerian phone numbers
    const phoneRegex = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;

    if (phoneLabel.innerText === 'Phone') {
      if (!phoneRegex.test(phoneInput.value)) {
        errorText2.innerText = 'Please enter a valid phone number.';
        return false;
      } else {
        errorText2.innerText = '';
        return true;
      }
    }
  };

  // FUNCTION TO VALIDATE EMAIL INPUT
  const validateEmail = () => {
    if (phoneLabel.innerText === 'Email') {
      // Regular expression to validate Email
      const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!emailRegex.test(phoneInput.value)) {
        errorText2.innerText = 'Please enter a valid Email.';
        return false;
      } else {
        errorText2.innerText = '';
        return true;
      }
    }
  };

  // FUNCTION TO SHOW NEXT BUTTON
  const showNextBtn = () => {
    if (
      (validateName() && validatePhone()) ||
      (validateName() && validateEmail())
    ) {
      nextBtn.style.cssText = 'opacity: 1; pointer-events: all';
    } else {
      nextBtn.style.cssText = 'opacity: .5; pointer-events: none';
    }
  };
})();

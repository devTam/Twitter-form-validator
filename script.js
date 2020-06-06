const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const nameField = document.querySelector('.name');
const nameErrorDiv = document.querySelector('.form__error1');
const phoneErrorDiv = document.querySelector('.form__error2');
const toggleBtn = document.querySelector('.toggle-btn');
const nameLabel = form.querySelector('.name-label');
const phoneLabel = form.querySelector('.phone-label');
const errorText2 = phoneErrorDiv.querySelector('.form__error2--text');
const phoneInput = document.querySelector('.phone');
const nextBtn = document.querySelector('.form__nav-btn');







// To toggle between email and phone number
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(toggleBtn.innerText === 'Use email instead' ) {
        toggleBtn.innerText = 'Use phone instead';
        phoneLabel.innerText = 'Email';
        // set the error text div to empty so when switching previous error is cleared
        errorText2.innerText = '';
        // Reset input field 
        phoneInput.value = '';
    }else {
        toggleBtn.innerText = 'Use email instead';
        phoneLabel.innerText = 'Phone';
        // set the error text div to empty so when switching previous error is cleared
        errorText2.innerText = '';
        // Reset input field 
        phoneInput.value = '';
    }
});

// nextBtn.style.cssText = 'opacity: 1; pointer-events: all';


form.addEventListener('input', (e) => {

    // Validating the name input 
    const nameInput = e.target.closest('.name');
    if (e.target === nameInput) {
        const counter = nameErrorDiv.querySelector('span');
        counter.innerText = nameInput.value.length;

        // To validate length of name not more than 50
        nameInput.addEventListener('keydown', (e) => {
            if(nameInput.value.length >= 50 && e.code !== 'Backspace') event.preventDefault();
        });

        // To validate empty name field
        let nameErrorText = form.querySelector('.form__error1--text');
        if(nameInput.value === '') {
            nameErrorText.innerText = 'What\'s your name?';
            nameField.setAttribute('id', 'error-bottom');
            nameLabel.setAttribute('id', 'error');
        } else  {
            nameErrorText.innerText = '';
            nameField.removeAttribute('id', 'error-bottom');
            nameLabel.removeAttribute('id', 'error');
        }
        
    }

    
    


    
    // Validating the Phone input
    const phoneInput = e.target.closest('.phone');
    const validatePhone = () => {

        const phoneRegex = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
        if (e.target === phoneInput && phoneLabel.innerText === 'Phone') {
            // Regular expression to validate Nigerian phone numbers
            if (!phoneRegex.test(e.target.value)) {
                //Apply to phoneErrorDiv
                errorText2.innerText = 'Please enter a valid phone number.'
                return false;
            }else {
                errorText2.innerText = '';
                return true;
            }
        } 
        
    }
    validatePhone();

    
    

    // Validating email input

    const validateEmail = () => {

        if (e.target === phoneInput && phoneLabel.innerText === 'Email') {
            // Regular expression to validate Email
            const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!emailRegex.test(e.target.value)) {
                
                errorText2.innerText = 'Please enter a valid Email.'
                return false;

            }else {
                errorText2.innerText = '';
                return true
            }  
        }
    }

    validateEmail();

    // console.log(validateEmail());


    // Showing the next button if all validation is true

    // if (!nameInput.value === '')
  

    if (validatePhone() === true || validateEmail() === true) {
        console.log('Phone and Email passed!');
        
    }
    
});



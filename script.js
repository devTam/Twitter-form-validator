const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const nameField = document.querySelector('.name');
const nameErrorDiv = document.querySelector('.form__error1');
const phoneErrorDiv = document.querySelector('.form__error2');
const toggleBtn = document.querySelector('.toggle-btn');
const nameLabel = form.querySelector('.name-label');
const phoneLabel = form.querySelector('.phone-label');






// To toggle between email and phone number
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(toggleBtn.innerText === 'Use email instead' ) {
        toggleBtn.innerText = 'Use phone instead';
        phoneLabel.innerText = 'Email';
    }else {
        toggleBtn.innerText = 'Use email instead';
        phoneLabel.innerText = 'Phone';
    }
});


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
    if (e.target === phoneInput) {
        // if phone number is invalid print  Please enter a valid phone number.

    }

  
    
});





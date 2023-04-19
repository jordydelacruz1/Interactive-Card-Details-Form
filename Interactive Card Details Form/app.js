// Card Information
let cardNumber = document.querySelector('#card-front-number');
let cardName = document.querySelector('#card-front-name');
let cardExpiration = document.querySelector('#card-front-exp-date');
let cardFrontExpirationYear = document.querySelector('#card-front-expiration-year');
let cardCVC = document.querySelector('#card-front-cvc');
// User Card Information
let userName = document.querySelector('.name');
let userCardNumber = document.querySelector('.user-card-number');
let expMonth = document.querySelector('.month');
let expYear = document.querySelector('.year');
let cvcNumber = document.querySelector('.cvc-number');
// Buttons
let confirmButton = document.querySelector('#confirm-cta');
let continueButton = document.querySelector('#continue');
// Hidden Containers
let form = document.querySelector('.user-info');
let thankYouContainer = document.querySelector('.thank-you');
// Errors
let cardNumberError = document.querySelector('#card-number-error');
let dateError = document.querySelector('#date-error');
let cvcError = document.querySelector('#cvc-error');
let cardNameError = document.querySelector('#card-name-error');

userName.addEventListener('keyup', (e) => {
    let cardNameValue = userName.value;
    let key = e.key;
    let keyLetters = key.match(/^[A-Za-z ]*$/);
    if (cardNameValue.length === 0) {
        cardNameError.innerHTML = 'Please enter your name';
        userName.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (keyLetters) {
        cardName.innerHTML = cardNameValue;
        cardNameError.innerHTML = '';
    } else {
        cardNameError.innerHTML = 'Please use only letters';
        userName.style.borderColor = 'hsl(0, 100%, 66%)';
    }

});

userCardNumber.addEventListener('keyup', (e) => {
    let cardNumberValue = userCardNumber.value;
    let key = e.key;
    let keyNumbers = key.match(/^[0-9 ]*$/);
    if (cardNumberValue.length === 0) {
        cardNumberError.innerHTML = 'Please enter your card number';
        userCardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (keyNumbers) {
        cardNumber.innerHTML = cardNumberValue;
        cardNumberError.innerHTML = '';
    } else {
        cardNumberError.innerHTML = 'Wrong format, numbers only';
        userCardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    }
});

expMonth.addEventListener('keyup', (e) => {
    let expirationValue = expMonth.value;
    let key = e.key;
    let keyNumbers = key.match(/^[0-9 ]*$/);
    if (expirationValue === '') {
        dateError.innerHTML = 'Can\'t be blank';
        expMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (expirationValue > 12) {
        dateError.innerHTML = 'Invalid month';
        expMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (keyNumbers) {
        cardExpiration.innerHTML = expirationValue;
        dateError.innerHTML = '';
    } else {
        dateError.innerHTML = 'Please only use numbers';
        expMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    }
});

expYear.addEventListener('keyup', (e => {
    let expirationYear = expYear.value;
    let key = e.key; 
    let keyNumbers = key.match(/^[0-9 ]*$/);
    if (expirationYear === '') {
        dateError.innerHTML = 'Can\'t be blank';
        expYear.style.borderColor = 'hsl(0, 100%, 66%)';
    }  else if (expirationYear < 23) {
        dateError.innerHTML = 'Invalid Year';
        expYear.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (keyNumbers) {
        cardFrontExpirationYear.innerHTML = expirationYear;
        dateError.innerHTML = '';
    } else {
        dateError.innerHTML = 'Please only use numbers';
        expYear.style.borderColor = 'hsl(0, 100%, 66%)';
    }
}));

cvcNumber.addEventListener('keyup', (e) => {
    let cvc = cvcNumber.value;
    let key = e.key; 
    let keyNumbers = key.match(/^[0-9 ]*$/);
    if (cvc === '') {
        cvcError.innerHTML = 'Can\'t be blank';
        cvcNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    } else if (keyNumbers) {
        cardCVC.innerHTML = cvc;
        cvcError.innerHTML = '';
    } else {
        cvcError.innerHTML = 'Please only use numbers';
        cvcNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    }
});

confirmButton.addEventListener('click', () => {
    if (userName.value.length <= 0) {
        cardNameError.innerHTML = 'Please enter your name'
        userName.style.borderColor = 'hsl(0, 100%, 66%)'
    } if (userCardNumber.value.length <= 0) {
        cardNumberError.innerHTML = 'Please enter your card number';
        userCardNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    } if (expMonth.value.length <= 0) {
        dateError.innerHTML = 'Can\'t be blank';
        expMonth.style.borderColor = 'hsl(0, 100%, 66%)'
    } if (expYear.value.length <= 0) {
        dateError.innerHTML = 'Can\'t be blank';
        expYear.style.borderColor = 'hsl(0, 100%, 66%)'
    } if (cvcNumber.value.length <= 0) {
        cvcError.innerHTML = 'Can\'t be blank';
        cvcNumber.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        thankYouContainer.classList.remove('hidden');
        form.style.display = 'none';
    }
})

continueButton.addEventListener('click', () => {
    thankYouContainer.style.display = 'none';
    form.style.display = 'block';
})
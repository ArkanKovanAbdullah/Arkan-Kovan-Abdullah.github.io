const emlInput = document.getElementById('email');
const cntcForm = document.getElementById('form');
const names = document.getElementById('name');
const textarea = document.getElementById('in-one');
const validationErr = document.getElementById('email-validation-error');

cntcForm.addEventListener('submit', (g) => {
    if (emlInput.value !== emlInput.value.toLowerCase()) {
        g.preventDefault();
        validationErr.style.opacity = 100;
    } else {
        const data = {
            name: names.value,
            email: email.value,
            textarea: textarea.value,
          };
          localStorage.setItem('data', JSON.stringify(data));
    }
});
const x = JSON.parse(localStorage.getItem('data'));
names.value = x.name;
email.value = x.email;
textarea.value = x.textarea;


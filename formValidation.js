const emlInput = document.getElementByid('email');
const cntcForm = document.getElementById('form');
const validationErr = document.getElementById('email-validation-error');

cntcForm.addEventListener('submit', (g) => {
    if (emlInput.value !== emlInput.value.toLowerCase()) {
        g.preventDefault();
        validationerr.style.opacity = 100;
        console.log("yes!");
    } else {
        const data = {
            name: name.value,
            email: email.value,
            textarea: textarea.value,
          };
          localStorage.setItem('data',data);
    }
});
const x = JSON.parse(localStorage.getItem('data'));
name.value = x.name;
email.value = x.email;
textarea.value = x.textarea;


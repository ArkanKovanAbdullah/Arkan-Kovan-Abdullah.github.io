const emlInput = document.getElementById('email');
const cntcForm = document.getElementById('form');
const validationErr = document.getElementById('email-validation-error');
cntcForm.addEventListener('submit', (g) => {
  if (emlInput.value !== emlInput.value.toLowerCase()) {
    g.preventDefault();
    validationErr.style.opacity = 100;
  }
});
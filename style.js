const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
  if (!isValidEmail(emailInput.value)) {
    // Display an error message
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }
});
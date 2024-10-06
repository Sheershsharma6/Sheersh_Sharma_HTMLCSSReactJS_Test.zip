document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear any previous errors
  clearErrors();

  // Get form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  // Validate First Name
  if (firstName === '') {
    showError('firstName', 'First Name is required');
    isValid = false;
  }

  // Validate Last Name
  if (lastName === '') {
    showError('lastName', 'Last Name is required');
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  // Validate Phone Number (10 digits format)
  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    showError('phoneNumber', 'Please enter a valid 10-digit phone number');
    isValid = false;
  }

  // Validate Password (minimum 8 characters)
  if (password.length < 8) {
    showError('password', 'Password must be at least 8 characters');
    isValid = false;
  }

  // If the form is valid, log the data
  if (isValid) {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password
    };
    console.log(formData);
  }
});

// Function to show error messages
function showError(fieldId, message) {
  const inputField = document.getElementById(fieldId);
  inputField.style.borderColor = 'red';
  
  const errorMessage = document.createElement('div');
  errorMessage.innerText = message;
  errorMessage.style.color = 'red';
  errorMessage.style.fontSize = '0.9em';
  errorMessage.className = 'error-message';
  
  // Insert the error message after the input field
  inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

// Function to clear previous errors
function clearErrors() {
  const inputFields = document.querySelectorAll('.signup-form input');
  inputFields.forEach(field => field.style.borderColor = '');

  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.remove());
}

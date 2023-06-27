function validityEmail() {
    var emailInput = document.querySelector(".field1 input");
    var errorSpan = document.getElementById("err");
    var emailRege = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailInput.value.match(emailRege)) {
      errorSpan.textContent = "";
      return true;
    } else {
      errorSpan.textContent = "Invalid Email Address";
      return false;
    }
  }
  
  function validityPhone() {
    var phoneInput = document.querySelector(".field2 input");
    var errorSpan = document.getElementById("err1");
    var phoneRege = /^(\d{3}[-.\s]?\d{3}[-.\s]?\d{4}|\d{10})$/;
  
    if (phoneInput.value.match(phoneRege)) {
      errorSpan.textContent = "";
      return true;
    } else {
      errorSpan.textContent = "Invalid Mobile Number"
      return false;
    }
  }
  
  function validPass() {
    var passwordInput = document.querySelector(".field3 input");
    var errorSpan = document.getElementById("err2");
    var passwordRege = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (passwordInput.value.match(passwordRege)) {
      errorSpan.textContent = "";
      passwordStrengthIndicator(passwordInput.value);
      return true;
    } else {
      errorSpan.textContent = "Try Another password";
      passwordStrengthIndicator('');
      return false;
    }
  }
  
  function passwordStrengthIndicator(password) {
    var strengthSpan = document.getElementById("password-strength");
  
    if (password === '') {
      strengthSpan.textContent = "";
      strengthSpan.style.backgroundColor = "transparent";
      return;
    }
  
    var strength = 0;
  
    if (password.length >= 8) {
      strength++;
    }
    if (/[a-z]/.test(password)) {
      strength++;
    }
    if (/[A-Z]/.test(password)) {
      strength++;
    }
    if (/\d/.test(password)) {
      strength++;
    }
  
    switch (strength) {
      case 1:
        strengthSpan.textContent = "Weak";
        strengthSpan.style.backgroundColor = "red";
        break;
      case 2:
        strengthSpan.textContent = "Medium";
        strengthSpan.style.backgroundColor = "orange";
        break;
      case 3:
        strengthSpan.textContent = "Strong";
        strengthSpan.style.backgroundColor = "green";
        break;
      default:
        strengthSpan.textContent = "bad ";
        strengthSpan.style.backgroundColor = "transparent";
        break;
    }
  }
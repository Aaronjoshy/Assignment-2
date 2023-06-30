function validityEmail() {
    var emailInput = document.getElementById("email");
    var errorSpan= document.getElementById("err");
    var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(emailInput.value.trim()==''){
      errorSpan.textContent="Email is required";
      errorSpan.style.color="2px solid red";
      return false
    }
    else if (!emailInput.value.match(regex)) {
      errorSpan.textContent="Email is not in correct format";
      return false

    } 
    else {
      errorSpan.textContent="";
      return true;
    }
  }
  
  function validityPhone() {
    var phoneInput = document.getElementById("phnNum");
    var errorSpan = document.getElementById("err1");
    var cleanedPhoneNumber = phoneInput.value.replace(/[^\d]/g, '');

    if(phoneInput.value.trim()==""){
      errorSpan.textContent="Phone no. is required";
      return false;
    }
    else if(!/^[\d.\-\/\s]+$/.test(phoneInput.value)){
      errorSpan.textContent="Only digits please";
      return false;
    }

    else if(cleanedPhoneNumber.length !== 10){
      errorSpan.textContent="Invalid phone number format";
      return false;
    }

    else{
      errorSpan.textContent='';
      return true;
    }
  }
  
  function validPass() {
    var passwordInput = document.getElementById("pass");
    var errorSpan = document.getElementById("err2");


    var password = passwordInput.value;
    var validationResult = validatePassword(password);

    errorSpan.textContent = validationResult.strength;
    errorSpan.style.color = validationResult.color;
    return errorSpan;
  }


  function validatePassword(password) {
    var passwordStrength = "";
    var passwordColor = "";

    if(password.length < 8){
      passwordStrength = "minium 8 characters";
      passwordColor = "red";
    } 
    else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      passwordStrength = "Medium";
      passwordColor = "orange";
    }
    else {
      passwordStrength = "Strong";
      passwordColor = "green";
    }

    return { strength: passwordStrength, color: passwordColor };
  }

  function verify(){
    var submitError = document.getElementById('sub');
    var subErr = document.getElementById('err3');

    var passCheck = validPass();
    if(!validityEmail() || !validityPhone() || passCheck.textContent != "Strong"){
      console.log(`${passCheck.textContent}`)
      subErr.style.display='block';
      subErr.textContent="please fix the errors";
      setTimeout(function(){subErr.style.display= 'none';}, 3000);
      return false  

    }
  }

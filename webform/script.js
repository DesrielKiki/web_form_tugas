function submitLoginForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var education = document.querySelectorAll(
    'input[name="education[]"]:checked'
  );
  var province = document.getElementById("province").value;
  var fileInput = document.getElementById("file").value;

  if (
    email === "" ||
    password === "" ||
    !gender ||
    education.length === 0 ||
    province === "" ||
    fileInput === ""
  ) {
    alert("Please fill all the fields");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  alert("Login successful!");
  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

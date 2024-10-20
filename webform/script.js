function submitLoginForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var education = document.querySelectorAll('input[name="education[]"]:checked');
  var province = document.getElementById("province").value;
  var fileInput = document.getElementById("file").value;

  if (email === "" || password === "" || !gender || education.length === 0 || province === "" || fileInput === "") {
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
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('show-password');
  passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}

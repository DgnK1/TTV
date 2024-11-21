function userDropDown() {
  document.getElementById("userDropdown").classList.toggle("userShow");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.userDropbtn')) {
    var userDropdowns = document.getElementsByClassName("userDropdown-content");
    var i;
    for (i = 0; i < userDropdowns.length; i++) {
      var openUserDropdown = userDropdowns[i];
      if (openUserDropdown.classList.contains('userShow')) {
        openUserDropdown.classList.remove('userShow');
      }
    }
  }
}

// Show the sign-up form and hide the login form
function showSignUp() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('sign-up-form').style.display = 'block';
}

// Show the login form and hide the sign-up form
function showLogin() {
  document.getElementById('sign-up-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// Handle login logic
function login() {
  const userInput = document.getElementById('login-username-email').value;
  const password = document.getElementById('login-password').value;

  const storedUsername = localStorage.getItem('username');
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if ((userInput === storedUsername || userInput === storedEmail) && password === storedPassword) {
      alert('Login successful!');
      window.location.href = 'main.html'; // Redirect after successful login
  } else {
      alert('Invalid credentials.');
  }
}

// Handle sign-up logic
function signUp() {
  const username = document.getElementById('new-username').value;
  const email = document.getElementById('new-email').value;
  const password = document.getElementById('new-password').value;

  if (username && email && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Sign Up successful! You can now log in.');
      showLogin(); // Show the login form after sign-up
  } else {
      alert('Please fill in all the fields.');
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';  
}

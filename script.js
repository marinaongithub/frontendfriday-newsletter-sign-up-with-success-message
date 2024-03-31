// Switch image from mobile to desktop and vice versa

function switchImage(x) {
    var image = document.getElementById("sign-up-image");
    if (x.matches) { // If media query matches
        image.src = "assets/images/illustration-sign-up-desktop.svg";
        image.alt = "Illustration sign up desktop"
        image.width = "400";
        image.height = "593"
    } else {
        image.src = "assets/images/illustration-sign-up-mobile.svg";
        image.alt = "Illustration sign up mobile"
        image.width = "375";
        image.height = "284"
    }
  }
  
    // Create a MediaQueryList object
const x = window.matchMedia("(min-width: 431px)")
  
    // Call listener function at run time
switchImage(x);
  
    // Attach listener function on state changes
x.addEventListener("change", function() {
    switchImage(x);
});



// Custom validation for email field

const form = document.getElementById('form');
const emailInput = document.getElementById('email');

// Check validity of email input
function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Define display of error message
function setError() {
    const invalidMsg = document.getElementById('invalidMsg');
    invalidMsg.style.visibility = "visible";
    form.setAttribute('disabled', true);
    emailInput.setAttribute('class', "invalid");
}

//Full email validation fonction
function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
        setError();
    }
    else {
        localStorage.setItem("email", emailValue);
        window.location.href = "success.html";
    }
}

//Removes error email display when input is changed
emailInput.addEventListener('input', function() {
        invalidMsg.style.visibility = "hidden";
        emailInput.removeAttribute('class');
    })
    

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateEmail();
});




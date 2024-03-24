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
  var x = window.matchMedia("(min-width: 426px)")
  
  // Call listener function at run time
  switchImage(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    switchImage(x);
  });
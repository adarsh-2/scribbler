// Search for the modals
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Search for the button to open modals
var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

// Search the button to close modal
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

//Open the modal
openModal = modal => {
    modal.style.display = "block";
};

//Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

// Event to handle the click on Signin/signup buttons
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

// Event to handle close button
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

const signInButton = document.querySelector(".signInButton");

const signIn = () => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
    //promise
  .signInWithPopup(provider)
  //eventual result
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    let credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
    console.log(user);
    window.location = "writeNote.html";
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
    //error message
    console.log("THINGS BROKE!")
    console.log(errorCode);
    console.log(errorMessage)
  });
console.log("here")
}


signInButton.addEventListener("click", signIn)
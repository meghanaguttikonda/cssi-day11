// object that represents the whole page
window.onload = (event) => {
console.log("window loaded");
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log(user);
    } else{
        window.location = "index.html";
    }
})
};
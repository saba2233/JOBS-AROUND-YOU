var firebaseConfig = {
  apiKey: "AIzaSyCWUCoPgjTWpdR7vp0A1NuDfvfufgBexqM",
  authDomain: "jobs-around-you.firebaseapp.com",
  databaseURL: "https://jobs-around-you.firebaseio.com",
  projectId: "jobs-around-you",
  storageBucket: "",
  messagingSenderId: "843875913198",
  appId: "1:843875913198:web:fa40724e7de40e503492ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var signin_button=document.getElementById('signup_button');
var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().createUserWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "../index.html";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});

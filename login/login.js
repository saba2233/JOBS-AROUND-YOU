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



var signin_button=document.getElementById('signin_button');
var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    if(email == 'admin@gmail.com')
    {
      document.location.href = "../table.html";
    }
    else
    {
      document.location.href = "../index.html";
    }
  
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
    alert('wrong password');
  });

});


// Firstly, the Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWUCoPgjTWpdR7vp0A1NuDfvfufgBexqM",
  authDomain: "jobs-around-you.firebaseapp.com",
  databaseURL: "https://jobs-around-you.firebaseio.com",
  projectId: "jobs-around-you",
  storageBucket: "",
  messagingSenderId: "843875913198",
  appId: "1:843875913198:web:fa40724e7de40e503492ff"
};
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


auth.onAuthStateChanged(user =>
  {
    if(user)
    {
      console.log('user log in :',user);
      document.getElementById("Log_out").style.display = "block";
      document.getElementById("Log_in").style.display = "none";
   

      localStorage.setItem('logged','yes');
    }
    else{
      console.log('user log out');
      document.getElementById("Log_out").style.display = "none";
      document.getElementById("Log_in").style.display = "block";
   
      localStorage.setItem('logged','no');
    }
  })
  const logout = document.getElementById("Log_out");
	logout.addEventListener('click', (e) => {
		e.preventDefault();
		auth.signOut().then(() =>{
		console.log('logged out !');
		});
	});
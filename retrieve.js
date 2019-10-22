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


function createTable() {
  var table = document.getElementById('inboxTable');

  var ref = "messages";
   var emailsRef = firebase.database().ref(ref);

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML =  alldata[index].email;
        cell3.innerHTML = alldata[index].message;
        cell4.innerHTML = alldata[index].phone;
    }
  }, errEmailsData);

}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

createTable();

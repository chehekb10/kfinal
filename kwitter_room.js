
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

  var firebaseConfig = {
    apiKey: "AIzaSyCBb0Nd-OmG_zdvproD9h3EcNyFUOmzu7c",
    authDomain: "kwitter1-3319a.firebaseapp.com",
    databaseURL: "https://kwitter1-3319a-default-rtdb.firebaseio.com",
    projectId: "kwitter1-3319a",
    storageBucket: "kwitter1-3319a.appspot.com",
    messagingSenderId: "791144662884",
    appId: "1:791144662884:web:4b983964eb1a57ef9adc71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name= document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update(
              {
                   purpose: "adding room name"
              }
          );
          localStorage.setItem("room_name", room_name);
  
          window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- ",Room_names);
      vert= "<div class='room_name' id="+Room_names+" onclick= 'redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=vert;
       //End code
      });});}
getData();
function redirect_to_room_name(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);

      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
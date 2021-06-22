user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

//YOUR FIREBASE LINKS

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
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log('firebase_message_id');
console.log('message_data');
uname= message_data['name'];
like= message_data['like'];
msg= message_data['message'];
name_tag= "<h4 >"+uname +"<img class='i1' src='tick.png'></h4>";
message= "<h4 class='msg_1'>"+ msg +"</h4>";
like_button="<button class='btn-btn warning' id="+firebase_message_id+"value="+ like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like :"+like+"</span></button><hr>";
row= name_tag+message+like_button+span_with_tag;
document.getElementById("output").innerHTML= row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - "+ message_id);
      button_id=message_id;
      likes= document.getElementById(button_id).value;
      updatedLike=Number(likes)+1;
      console.log(updatedLike);

       firebase.database().ref(room_name).child(message_id).update(

              {
                   like: updatedLike
              }
          );
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
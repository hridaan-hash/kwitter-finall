
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCmPcQ6BwFR0uUoCXUSYAE8ryWpLJXU1Yo",
      authDomain: "kwitter-app-a452e.firebaseapp.com",
      databaseURL: "https://kwitter-app-a452e.firebaseio.com",
      projectId: "kwitter-app-a452e",
      storageBucket: "kwitter-app-a452e.appspot.com",
      messagingSenderId: "107879470222",
      appId: "1:107879470222:web:997897cc4a88aa3c4025df"
    };
    //Initalize Firebase
    firebase.initalizeApp(firebaseConfig);


function addRoom (){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name" 
      });
  localStorage.setItem("room_name",room_name);
  window.location ="kwitter_page.html"
  }
  function getData (){
        firebase.database().ref ("/").on('value', function (snapshot) {document.getElementById("output").innerHTML
        Room_names = childKey;
        //start code
console.log("Room_names -" + Room_names);
row = "<div class='room_name' "+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><chr>"
document.getElementById("output").innerHTML += row;
        //end code
  
        });};
        function redirectToRoomName(){
              console.log(name);
              localStorage.setItem("room_name", window.location ="kwitter_page.html")
        } 
function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html"
}
function send ()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref (room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
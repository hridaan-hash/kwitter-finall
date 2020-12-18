function addUser () {
    user_name =document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location ="kwitter_room.html"
}

function getData (){
    firebase.database().ref ("/").on('value'), function (snapshot) 
    {document.getElementById("output").innerHTML
    Room_names = childKey;
    //start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message = message_data['message'];
like= message_data ['like'];
name_with_tag ="<h4>"+ name +"<img class = 'user_tick' src='tick.png'></h4>" ;
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//end code
    };}
    function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html"
}

function updateLike (message_id)
{
console.log("clicked on like button - " + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes = Number(likes)+ 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}

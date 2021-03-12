
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD0H-2UmS8g5jZxBdmaUmYF43ckKfAgBrc",
      authDomain: "kwitter-9e536.firebaseapp.com",
      databaseURL: "https://kwitter-9e536-default-rtdb.firebaseio.com",
      projectId: "kwitter-9e536",
      storageBucket: "kwitter-9e536.appspot.com",
      messagingSenderId: "745176499262",
      appId: "1:745176499262:web:272c810cef62c18ea93d6f"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";

function addRoom() 
{ 
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
             });
              localStorage.setItem("room_name", room_name);
               window.location = "kwitter_page.html";
             }


             function getData()
              {
                     firebase.database().ref("/").on('value', function(snapshot)
                      { 
                            document.getElementById("output").innerHTML = "";
                             snapshot.forEach(function(childSnapshot) 
                             {
                                    childKey = childSnapshot.key;
                                     Room_names = childKey; console.log("Room Name - " + Room_names);
                                      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                                       document.getElementById("output").innerHTML += row; 
                                    }); });}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}
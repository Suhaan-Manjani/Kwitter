
  var firebaseConfig = {
      apiKey: "AIzaSyB3kn3K7_Ba_bH8yhqznaJ3TBpmFIqKSPY",
      authDomain: "classtest-15db0.firebaseapp.com",
      databaseURL: "https://classtest-15db0-default-rtdb.firebaseio.com",
      projectId: "classtest-15db0",
      storageBucket: "classtest-15db0.appspot.com",
      messagingSenderId: "849374584205",
      appId: "1:849374584205:web:e0c2c0e445be6ed7aff1c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });

          localStorage.setItem("room_name", roome_name);

          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row=<div class='roome_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>
      //End code
      });});}
getData();

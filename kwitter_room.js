
var firebaseConfig = {
      apiKey: "AIzaSyCkkObR_xvP5Oi_i4fo_PFPr8uDezuEzqA",
      authDomain: "kwitter-c78b6.firebaseapp.com",
      databaseURL: "https://kwitter-c78b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-c78b6",
      storageBucket: "kwitter-c78b6.appspot.com",
      messagingSenderId: "326790838185",
      appId: "1:326790838185:web:79fd7ed133ea48783b36b8"
    };
    
    
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


const firebaseConfig = {
    apiKey: "AIzaSyCcRPHn2EgEpJCXU2vWDadGn516erz81IE",
    authDomain: "chat-app-bd7c5.firebaseapp.com",
    databaseURL: "https://chat-app-bd7c5-default-rtdb.firebaseio.com",
    projectId: "chat-app-bd7c5",
    storageBucket: "chat-app-bd7c5.appspot.com",
    messagingSenderId: "425011596428",
    appId: "1:425011596428:web:db6ccf8004af676258bfa9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




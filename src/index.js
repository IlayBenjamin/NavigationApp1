import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



function checkUserInput2(username) {
  return (
    typeof username == "string" && (username !== "" && username.length >= 3)
  );
}

function requestUserInput2() {
  var username = prompt("Enter Your Username");
  if (checkUserInput(username)) {
    return { username: username };
  } else {
    return false;
  }
}

function checkUserInput(id) {
  return (
    true
  );
}

function requestUserInput() {
  var id = prompt("Enter Your id");
  if (checkUserInput(parseInt(id))) {
    return id;
  } else {
    return false;
  }
}

//{username: "IlayBenjamin", nickname: "Benjamin"}
document.getElementById("sign_in_btn").addEventListener("click", (event) => {
  var userInputResults = requestUserInput();
  event.target.style.display = "none";

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {userInputResults ? <App userId={userInputResults} /> : <h1>You Have To Fill The Fields!</h1>}
    </React.StrictMode>
  );
  
});

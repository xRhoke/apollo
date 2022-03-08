import React from 'react';
import axios from "axios";

function Home() {
  if (userAuthenticated()) {
    return (
            <div>
              <p>Hello, user!</p>
              <a href='#'>Logout</a>
              <h1>Welcome to Apollo!</h1>
            </div>
    )
  } else {
    return (
            <div>
              <a href='/oauth2/authorization/logingov'>Login</a>
              <h1>Welcome to Apollo!</h1>
            </div>
    )
  }
}

function userAuthenticated(): boolean {
 // axios call an endpoint to get the user
    axios.get("http://localhost:8080/user").then(result => {
        console.log("made it here");
        console.log(result.data);
    });

  return false;
}

export default Home;
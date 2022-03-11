import React, {useEffect} from 'react';
import axios from "axios";

function Home() {

  if (false) {
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
                <button onClick={login}>Login</button>
                <h1>Welcome to Apollo!</h1>
                <button onClick={ping}>Ping the Backend</button>
            </div>
    )
  }
}

function ping() {
    axios.get("/test").then(result => console.log(result.data));
}

function login() {
    axios.get("/oauth2/authorization/logingov").then(result => console.log(JSON.stringify(result, null, 2)))
}

export default Home;
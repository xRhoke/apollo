import React from 'react';

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

  return false;
}

export default Home;
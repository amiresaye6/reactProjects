import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css'; // Import custom styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault(); // fixed typo here
    fetch('http://localhost:1234/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}> {/* changed onSuspend to onSubmit */}
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Username</label>
          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Enter username"
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;

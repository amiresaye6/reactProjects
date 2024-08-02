import React, { useState } from 'react'
import './Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
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
        <div className='login container vh-100 d-flex justify-content-center align-items-center'>
            <div className="card" style={{ "width": "28rem" }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={event => setUsername(event.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className=" submit-btn btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

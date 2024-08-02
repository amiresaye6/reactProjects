import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        fetch('http://localhost:1234/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
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
                        <input type="text" className="form-control inputField" id="floatingUsername" placeholder="Amir Alsayed"
                            onChange={event => setUsername(event.target.value)} />
                        <label htmlFor="floatingUsername">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control inputField" id="floatingEmail" placeholder="name@example.com"
                            onChange={event => setEmail(event.target.value)} />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control inputField" id="floatingPassword" placeholder="Password"
                            onChange={event => setPassword(event.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control inputField" id="floatingConfirmPassword" placeholder="Confirm Password"
                            onChange={event => setConfirmPassword(event.target.value)} />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>
                    <button type="submit" className="submit-btn btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

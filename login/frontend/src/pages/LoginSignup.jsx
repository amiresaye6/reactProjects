import React from 'react'

function LoginSignup() {
    return (
        <div className='login container vh-100 d-flex justify-content-center align-items-center'>
            <div className="card" style={{ "width": "28rem" }}>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label className="btn btn-outline-primary" for="btnradio1">Login</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label className="btn btn-outline-primary" for="btnradio2">Signup</label>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import config from '../../config';

const Verify = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState();
    const [message, setMessage] = useState()

    function verify_acc(e) {
        e.preventDefault();
        fetch(config.base_URL + '/api/users/verify_acc', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(otp),
        })
            .then(res => res.json())
            .then(data => {
                if (typeof (data[Object.keys(data)[0]]) == 'object') {
                    setMessage("Your account is successfully verified.")
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000)
                }
                else {
                    setMessage(data[Object.keys(data)[0]])
                }
            })
            .catch((error) => {
                setMessage(`${error}`)
            });
    }

    return (
        <div className="App-header">
            <p>{message}</p>
            <form onSubmit={verify_acc}>
                Enter your Email <br />
                <input type="email" required
                    onChange={(e) => setOtp(pre => ({ ...pre, email: e.target.value }))} /> <br /><br />

                Enter 6-digit OTP password sent on your Email <br />
                <input type="number" required
                    onChange={(e) => setOtp(pre => ({ ...pre, otp: Number(e.target.value) }))} /> <br /><br />

                <input type="submit" value="Verify" />
            </form>
        </div>
    )
}

export default Verify;
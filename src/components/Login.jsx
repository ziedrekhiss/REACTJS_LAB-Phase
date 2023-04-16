import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'


export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('pass');
    const [islogged, setIsLogged] = useState(false);
    const handleLogin = (e) => {
        // e.preventDefault()
        if (username === 'admin' || password === 'admin') {
            setIsLogged(true);
            islogged? navigate('/Home'):null;
        }

    }
    useEffect(() => {
        
        handleLogin()
    }, [islogged])

    
    return (
        <div className='container'>
            <h1>Dental App</h1>
            <h6>Gérez votre cabinet</h6>
            <div className='Login'>
                <input
                    type="text"
                    placeholder='username'
                    id='username'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}/>
                <input
                    type="password"
                    placeholder='password'
                    id='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Se Connecter</button>

            </div>
        </div>

    )
}


import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import Home from './Home';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('pass');
    const [islogged, setIsLogged] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        if (username === 'admin' || password === 'admin') {
            setIsLogged(true);
            islogged? navigate('/Home'):null;
        }

        console.log(username);
        console.log(password);
        console.log(islogged);
    }
    return (
        <div className='container'>
            <h1>Dental App</h1>
            <h4>Gérez votre cabinet</h4>
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


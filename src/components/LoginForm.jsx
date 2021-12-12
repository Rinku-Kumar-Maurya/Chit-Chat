import { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className='input' type='text' value={username} placeholder='Username' onChange={() => setUsername(e.target.value)} required/>
                    <input className='input' type='password' value={password} placeholder='Password' onChange={() => setPassword(e.target.value)} required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

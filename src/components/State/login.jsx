import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    return (
        <>
        <form>
            <label for="username">Username</label>
            <input type="text" 
            name="username" 
            value={username}
            onChange={e =>setUsername(e.target.value)}></input>
            <label for="password">Password</label>
            <input type="password" 
            name="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}></input>
            <br />
            <button>Submit</button>

        </form>

        </>
    )

}

export default Login;

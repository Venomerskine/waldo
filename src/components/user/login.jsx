import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e, setState) {
        setState(e.target.value);
    }


    return (
        <>
            <div className='login-container'>
                <h1>Login</h1>
                <form>
                    <label> Email : 
                        <input type="email" required value={email} onChange={(e) => handleChange(e, setEmail)}/>
                    </label>
                    <label> Password :
                        <input type="password" required value={password} onChange={(e) => handleChange(e, setPassword)}/>
                    </label>
                </form>
            </div>
        </>
    )

}
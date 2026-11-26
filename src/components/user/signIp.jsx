import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className='signup-container'>
                <h1>Sign Up</h1>
                <form>
                    <label> Email : 
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label> Password :
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                </form>
            </div>
        </>
    )
}
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className='signup-container'>
                <h1>Sign Up</h1>
                <form>
                    <label> Email : </label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label> Password : </label>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
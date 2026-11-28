import { useState } from 'react';
import Login from '../../components/user/login';
import SignUp from '../../components/user/signUp';

export default function User() {
const [isLogin, setIsLogin] = useState(true);



    return (
        <div className='user-container'>

            <div className='user-card'>
            <div className='user-card-header'>
            <button className='login-button' onClick={() => setIsLogin(true)}>
                Login
            </button>
            <button className='signup-button' onClick={() => setIsLogin(false)}>
                Sign Up
            </button>
            </div>
            <div className='user-card-body'>
            {isLogin ? <Login /> : <SignUp />}
            </div>

                
            </div>
        </div>
        
    )
}
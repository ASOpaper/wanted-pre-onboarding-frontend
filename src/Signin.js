import { useState } from "react";
import customApi from "./customApi";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function isOkayEmail(){
        const regex = /@/;
        return regex.test(email)
    }
    function isOkayPassword(){
        return password.length >= 8;
    }
    const signInBtn = async() => {
        try{
            const res = await customApi({
                method: 'post',
                url: 'auth/signin',
                data:{
                    email,
                    password
                }
            })
			localStorage.setItem('access_token', res.data.access_token);
            navigate('/todo');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <main>
            <h1>로그인</h1>
            <div className="sign">
                <input
                data-testid="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                data-testid="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {isOkayEmail() && isOkayPassword() ?
                    <button data-testid="signup-button" onClick={signInBtn}>로그인</button>
                    :
                    <button data-testid="signup-button" onClick={signInBtn} disabled>로그인</button>
                }
            </div>
        </main>
    );
}

export default Signin;
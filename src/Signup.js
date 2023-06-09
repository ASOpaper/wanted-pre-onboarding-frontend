import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customApi from "./customApi";

function Signup() {
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
    const signupBtn = async() => {
        try{
            await customApi({
                method: 'post',
                url: 'auth/signup',
                data:{
                    email,
                    password
                }
            })
            navigate('/signin');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <main>
            <h1>회원가입</h1>
            <div className="sign">
                <input
                data-testid="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                data-testid="password-input"
                value={password}
                type={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {isOkayEmail() && isOkayPassword() ?
                    <button data-testid="signup-button" onClick={signupBtn}>회원가입</button>
                    :
                    <button data-testid="signup-button" disabled onClick={signupBtn}>회원가입</button>
                }
            </div>
        </main>
    );
}

export default Signup;
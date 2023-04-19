import { useState } from "react";
import customApi from "./customApi";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        }catch(err){
            console.log(err);
        }
    }

    return (
        <main>
            <h1>회원가입</h1>
            <div>
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
                    <button data-testid="signup-button" onClick={signupBtn}>회원가입</button>
                    :
                    <button data-testid="signup-button" disabled onClick={signupBtn}>회원가입</button>
                }
            </div>
        </main>
    );
}

export default Signup;
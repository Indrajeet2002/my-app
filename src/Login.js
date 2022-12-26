import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="sampleemail@gmail.com" id="email" name="email"></input>
                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
        </div>
    )
}

// const Login = () => {
//     // return (
        
//     // );
// }

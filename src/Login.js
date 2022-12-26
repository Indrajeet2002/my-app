import React, {useState} from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container bg-sky-500 items-center">
            <form>
                <label htmlfor="email">Email</label> <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="sampleemail@gmail.com" id="email" name="email"></input> <br></br>
                <label htmlfor="password">Password</label> <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input> <br></br>
                <button className="border-2 py-2.5 px-2.5 my-8 bg-white border-radius: 10px rounded hover:bg-slate-300" type="submit">Log In</button> <br></br>
            </form>
            <button className="border-2 py-2.5 px-2.5 mb-8 bg-white border-radius: 10px rounded hover:bg-slate-300" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
        </div>
    )
}
export default Login
// const Login = () => {
//     // return (
        
//     // );
// }

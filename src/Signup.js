import React, {useState} from "react";

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container bg-sky-500 items-center">
            <form onSubmit={handleSubmit}> 
                <label htmlFor="name">Full Name</label> <br></br>
                <input value={name} name="name" id="name" placeholder="full name"></input> <br></br>
                <label htmlfor="email">Email</label> <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="sampleemail@gmail.com" id="email" name="email"></input> <br></br>
                <label htmlfor="password">Password</label> <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input> <br></br>
                <button className="border-2 py-2.5 px-2.5 my-8 bg-white border-radius: 10px rounded hover:bg-slate-300" type="submit">Sign Up</button>
            </form>
            <button className="border-2 py-2.5 px-2.5 mb-8 bg-white border-radius: 10px rounded hover:bg-slate-300" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    )
}
export default Signup;
import React, {useState} from "react";
import "./App.css";
import Footer from "./Footer"
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/s" element={<h1>Router Working</h1>}/>
    </Routes>
  );
}

function Page() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Signup/> */}
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      } */}
      <About/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

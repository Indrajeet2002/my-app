import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import About from "./About";
import Landing from "./Landing";
import Search from "./Search";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
      <Route path="/Register" element={<Signup />} />
    </Routes>
  );
}

function Page() {
  return (
    <div className="App">
      <Navbar />
      <Search/>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

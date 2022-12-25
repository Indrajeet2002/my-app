import "./App.css";
import Footer from "./Footer"
import Navbar from "./Navbar";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";

function App() {
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
      <Signup/>
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

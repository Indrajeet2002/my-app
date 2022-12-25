import "./App.css";
import Footer from "./Footer"
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
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

import logo from './2024-10-05.png';
import './App.css';
import anime from "animejs";
import React,{useEffect,useState} from "react";



function App() {

  const [animationRef,setAnimationRef]=useState();

  useEffect(() =>
  {
    setAnimationRef(
      anime({
        targets: 'div',
        //translateX: 250,
        rotate: '2turn',
        backgroundColor: '#FFF',
        duration: anime.stagger(2000)
      })
    );
  },[]); // Only run once.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;

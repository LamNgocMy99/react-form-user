import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import isOdd from 'is-odd';
import './App.css'

function Contact() {
  const [count, setCount] = useState(0); const number = 11;

  console.log('ad: ', isOdd(number))

  return (
    <>
      <div> 
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div><h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Contact


/*
implement app (development) -> buil app -> deploy app (Netlify or Vercel)

dependency: react, react dom -> build app -> bundle.js  143kb

- npm install new libs


dependency: react, react dom, is-odd -> build app -> bundle.js  150kb
*/
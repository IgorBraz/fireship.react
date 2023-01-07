import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import React, { useState } from 'react';
import './style.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Ok I just edited it!
        </p>
        <MyComponent name={'Igor'} />
        <Card icon={<Icon></Icon>}>
          <p>The body of the card</p>
        </Card>
        <LoadingButton
          label="Press me"
          loading={isLoading}
          onClick={() => setIsLoading(!isLoading)}
        />
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

function Card(props) {
  return <section>
    <h2>{props.icon} Title</h2>
    {props.children}
  </section>;
}

function Icon() {
  return <i>🔥</i>;
}

function LoadingButton({ onClick, loading, label }) {
  return <button onClick={onClick} type="button">
    {loading ? <div className='loader' /> : label}
  </button>
}
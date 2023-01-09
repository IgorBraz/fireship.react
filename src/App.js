import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import React, { useState } from 'react';
import './style.css';
import Timer from './Lifecycle and Effects/Timer';
import Context from './Context/Context'
import { CountContext } from './Context/count-context'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);


  const handleClick = () => {
    setCount((prev) => {
      setPrevCount(prev);
    });
    setCount(count + 1);
  };

  const eventHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target);
  };

  const [count1, setContextCount] = useState(0);

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
        <ListAnimals animals={animals}></ListAnimals>
        <>
          <input
            value={value}
            placeholder="Enter some text"
            onChange={eventHandler}
          />
        </>
        <>
          <h3>Current count: {count}</h3>
          <h3>Previous count: {prevCount}</h3>
          <button onClick={handleClick}>Increment</button>
        </>
        <Timer hr={0} min={0} sec={5}></Timer>
        <CountContext.Provider value={[count1, setContextCount]}>
          <Context count={[count1, setContextCount]}></Context>
        </CountContext.Provider>
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

const animals = [
  { id: 1, name: 'Apolo gato fofinho 🐈' },
  { id: 2, name: 'Venus gata danada 🐈' }
]

function ListAnimals({ animals }) {
  return <>
    <ul>
      {animals && animals.map(({ id, name }) => {
        return <li key={id}>
          {name}
        </li>;
      })}
    </ul>
  </>
}
import React from 'react';
import WeatherInfo from './WeatherInfo';
import Header from '../Component/Header';
import Headline from '../Component/Headline';
import './app.scss';

const tempArr = [
  {
    fName: 'Chris',
    lName: 'Rock',
    age: 25,
    email: 'rock@gmail.com',
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click to get posts!" tempArr={tempArr} />
      </section>
      <WeatherInfo />
    </div>
  );
}

export default App;

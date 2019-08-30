import React from 'react';
import WeatherInfo from './WeatherInfo';
import Header from '../Component/Header';
import Headline from '../Component/Headline';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click to get posts!" />
      </section>
      {/* <WeatherInfo /> */}
    </div>
  );
}

export default App;

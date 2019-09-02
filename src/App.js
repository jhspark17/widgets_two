import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.jsx'
import Title from './title.jsx'
import Forecast from './forecast.jsx'
import TabsAuto from './tabs_auto.jsx'
import Like from './like.jsx'
import Calculator from './calculator.jsx'

function App() {
  const tabs = [{title: "tab1", content: "This is tab1"}, {title: "tab2", content: "This is tab2"}, {title: "tab3", content: "This is tab3"}]
  return (
    <div className="App">
      <Title />
      <Clock />
      <Forecast />
      <TabsAuto tabs={tabs}/>
      <Like/>
      <Calculator />
    </div>
  );
}

export default App;

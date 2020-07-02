import React from 'react';
import './App.css';
import Appetizers from './containers/Appetizers'
import Desserts from './containers/Desserts'
import Drinks from './containers/Drinks'
import Meals from './containers/Meals'

function App() {
  return (
    <div className="App">
      <div>
        <Appetizers />
        <Meals />
        <Drinks />
        <Desserts />
      </div>
    </div>
  );
}

export default App;

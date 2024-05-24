import React from 'react';
import Card from './components/card/Card';
import Filter from './components/filter/Filter';
import Products from './components/products/Products';
import DropDown from './components/dropdownlist/DropDown';

function App() {

  return (
    <div className="App">
      <Card />
      <Filter />
      <Products />
      <DropDown />
    </div>
  );
}

export default App;

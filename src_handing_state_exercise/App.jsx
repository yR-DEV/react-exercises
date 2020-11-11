import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList'
import AddShoppingListItem from './components/AddShoppingListItem';

const App = () => {

  let shoppingList = ["rune scim", "dragon boots", "dds", "fire runes", "nightmare staff", "death runes", "blood runes", "tbow"];
  const [list, setList] = useState(shoppingList);


  const handleSubmit = event => {
    event.preventDefault();
    setList([...list, event.target[0].value]);
  }

  return (
    <div>
      <ShoppingList list={list}/>
      <AddShoppingListItem handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
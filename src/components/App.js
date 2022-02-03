import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  function handleClick (event){
    setDarkMode((darkMode) => !darkMode)
  }
  const appClass = darkMode ? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

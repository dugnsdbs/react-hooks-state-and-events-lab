import React,{useState} from "react";

function Item({ name, category }) {
    const [addCart, setAddCart] = useState(true);

    function handleClick (event){
      setAddCart((addCart) => !addCart)
    }

    const appClasss = addCart ? "" : "in-cart"
  return (
    <li className={appClasss}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick ={handleClick} >{addCart ? "Add Cart" : "Remove from Cart"} </button>
    </li>
  );
}

export default Item;

/* eslint-disable no-unused-vars */

import React,{ useState } from 'react'
import "./itemcount.css"
export const ItemCount = ({initial,stock}) => {
  const [count, setcount]= useState(initial);
  const [agregadoAlCarro, setAgregadoAlCarro] = useState(false)

// eslint-disable-next-line no-unused-vars
const decrease = () => {
  setcount(count -1);
}
const increase = () => {
  // eslint-disable-next-line no-undef
  setcount(count +1);
}
const agregaralcarro = ()=> {
  setcount(count);
  setAgregadoAlCarro(!agregadoAlCarro)
  console.log("Me agregue al carrito");
};

  return (
    <div className='counter'>

        <button disabled={count <= 1} onClick={decrease} >-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase} >+</button>
        <div>
            
          <button onClick={()=> agregaralcarro}> agregar al carrito</button> 
        </div>
    </div>
    

  )
}
export default ItemCount;
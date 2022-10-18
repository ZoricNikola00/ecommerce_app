import React from 'react'
import { prodType, useGlobalContext } from '../context'
import {FiShoppingCart,FiTrash2} from 'react-icons/fi'
const Cart = () => {
    const {state,openCart,setOpenCart,del,plusminus}=useGlobalContext()
    

  return (
    <>
    <div className='cart' onClick={()=>setOpenCart(true)}><FiShoppingCart/><div>{state.amount}</div></div>
    <div className={`${openCart?'cartBackground active':'cartBackground'}`}></div>
        <div className={`${openCart?'cartContainer active':'cartContainer'}`}>
          <div className='x' onClick={()=>setOpenCart(false)}>X</div>
          {state.cart.length<1?<div className='cartItem'>Cart Is Empty!</div>:state.cart.map((x:prodType)=>{
            return <div className='cartItem'>
              <img src={x.image}/>
              <p>{x.title}</p>
              <div>
                <button onClick={()=>plusminus(x.id,'MINUS')}>-</button>
                <span>{x.amount}</span>
                <button onClick={()=>plusminus(x.id,'PLUS')}>+</button>
              </div>
              <div>$ {x.amount*x.price}</div>
              <button onClick={()=>del(x.id)}><FiTrash2/></button>
              </div>
          })}
          <h1 className='total'>Total price is: $ {state.total}</h1>  
        </div>
    </>
  )
}

export default Cart
import React from 'react'
import { useGlobalContext } from '../context'
import {FiShoppingCart} from 'react-icons/fi'
const Cart = () => {
    const {openCart,setOpenCart}=useGlobalContext()
    

  return (
    <>
    <div className='cart' onClick={()=>setOpenCart(true)}><FiShoppingCart/><div>1</div></div>
    <div className={`${openCart?'cartBackground active':'cartBackground'}`}></div>
        <div className={`${openCart?'cartContainer active':'cartContainer'}`}>
                <div onClick={()=>setOpenCart(false)}>X</div>
             
        </div>
    </>
  )
}

export default Cart
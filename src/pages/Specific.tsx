import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { prodType, useGlobalContext } from '../context'

const Specific = () => {
  const {products,setOpenCart,addToCart,isLoading}=useGlobalContext()
  const {id}=useParams()
  const itemEl=products?.find((x:prodType)=>x.id===Number(id))
  if(isLoading){
    return <Loader/>
  }
  return (
    <div className='specific'>
      <img src={itemEl?.image}/>
      <div className='specific-info'>
        <span>{itemEl?.category}</span>
        <h1>{itemEl?.title}</h1>
        <p>Rating {itemEl?.rating?.rate}</p>
        <h2>$ {itemEl?.price}</h2>
        <p>{itemEl?.description}</p>
        <button onClick={()=>{setOpenCart(true);addToCart(Number(id),itemEl)}}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Specific
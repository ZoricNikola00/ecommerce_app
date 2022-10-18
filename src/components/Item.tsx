import React,{useState} from 'react'
import { prodType, useGlobalContext } from '../context'
import {Link} from 'react-router-dom'

const Item = ({item}:any) => {
    const [view,setView]=useState(false)
    const {setOpenCart,addToCart}=useGlobalContext()
    const {id,title,image,price}=item
  return (
    <div onMouseEnter={()=>setView(true)} onMouseLeave={()=>setView(false)} className='item'>
        <div className={`${view?'viewMore active':'viewMore'}`}>
            <Link to={`/specific/${id}`}><button>View More</button></Link>
            <button onClick={()=>{setOpenCart(true);addToCart(id,item)}}>Add To Cart</button>
          </div>
        <img src={image}/>
        <div className="item-info">
            <p>{title}</p>
            <span>{price} $</span>
        </div>    
    </div>
  )
}

export default Item
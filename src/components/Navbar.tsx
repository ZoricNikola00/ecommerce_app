import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt,FaUserPlus} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
const [sub,setSub]=useState(false)
const {categ}=useGlobalContext()
  return (
    <nav>
        
        <Link to='/'><h1>MyShop</h1></Link>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/shop/all'><li onMouseLeave={()=>setSub(false)} onMouseEnter={()=>setSub(true)} className='shopMenu'>Shop
                {sub && <div>
                    {categ?.map((x:string)=>{
                        return <Link to={`/shop/${x}`}><li>{x}</li></Link>
                    })}
                </div>}
            </li></Link>
            <Link to='about'><li>About</li></Link>
        </ul>
        <div className='signinout'>
            <Link to='login'><div><FaSignInAlt/><span>Login</span></div></Link>
            <Link to='register'><div><FaUserPlus/><span>Register</span></div></Link>
        </div>
    </nav>
  )
}

export default Navbar
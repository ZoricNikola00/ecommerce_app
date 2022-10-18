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
            <Link to='shop'><li onMouseLeave={()=>setSub(false)} onMouseEnter={()=>setSub(true)} className='shopMenu'>Shop
                {sub && <div>
                    {categ?.map((x:string)=>{
                        return <Link to={`/category/${x}`}><li>{x}</li></Link>
                    })}
                </div>}
            </li></Link>
            <li>About</li>
        </ul>
        <div className='signinout'>
            <Link to='signin'><div><FaSignInAlt/><span>Login</span></div></Link>
            <Link to='signout'><div><FaUserPlus/><span>Register</span></div></Link>
        </div>
    </nav>
  )
}

export default Navbar
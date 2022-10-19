import React, {useState,useEffect} from 'react'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { prodType, useGlobalContext } from '../context'
import Item from '../components/Item'
import Loader from '../components/Loader'

const imgs=['https://previews.123rf.com/images/moodboard/moodboard1307/moodboard130707295/20742015-interior-of-a-electronics-store.jpg','https://as2.ftcdn.net/v2/jpg/02/36/51/09/1000_F_236510995_PYgUORegr8D3m9oMeA0c387C75pbDUdT.jpg','https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA=','https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8=']

const Home = () => {
    const {categ,products,isLoading}=useGlobalContext()
    const [indx,setIndx]=useState(0)

    const next=()=>{
        setIndx((p)=>{
          if(p+1>=imgs.length){
             return 0
          }
          return p=p+1
        })
      }
      const prev=()=>{
        if(indx===0){
           setIndx(imgs.length-1)
        }
        else{
          setIndx(p=>p-1)
        }
      }
useEffect(() => {
  const int=setInterval(()=>next(),5000)
  return ()=>clearInterval(int)
}, [indx])

const sorted=products?.sort((a:prodType,b:prodType)=>a.rating.rate - b.rating.rate).slice(0,4)
  return (
    <>
        <div className='home-main'>
            <button className='left' onClick={prev}><FaArrowLeft/></button>
            <button className='right' onClick={next}><FaArrowRight/></button>
            <div className='circles'>
                {categ?.map((_,i:any)=>{
                
                  return <div key={i} onClick={()=>setIndx(i)} className={`circle ${i===indx && 'active'}`}></div>
                })}
            </div>
            {categ?.map((x:string,i:number)=>{
                let position='next'
                if(i===indx-1 || indx===0 && i===imgs.length-1) position='prev'
                if(i===indx)position='active'
                return <div key={i} className={`slide ${position}`}>
                  <div><h4>Check Out Our:</h4><Link to={`/shop/${x}`}><h1>{x}</h1></Link> </div>
                  <Link to={`/shop/${x}`}><img src={imgs[i]}/></Link>
            </div>
          })}
        </div>
        <div className='prod'>
            <h1>Our best rated products</h1>
            <div className='prod-wrap'>
          {isLoading? <Loader/>:sorted?.map((x:prodType)=>{
            const {id,image,title,price}=x
            return <Item key={id} item={x}/>
          })}
          </div>
        </div>
    </>
  )
}

export default Home
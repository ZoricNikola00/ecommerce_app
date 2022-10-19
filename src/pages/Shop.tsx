import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { prodType } from '../context'
import Item from '../components/Item'
import Loader from '../components/Loader'

const fetchData=async(s:string|undefined)=>{
    let data
    if(s==='all'){
     data=await axios.get(`https://fakestoreapi.com/products/`)
    }
    else{
     data=await axios.get(`https://fakestoreapi.com/products/category/${s}`)
}
return data?.data
}

const Shop = () => {
    const {string}=useParams()
    const {data,isLoading}=useQuery(['shop',string],()=>fetchData(string))

    if(isLoading){
      return <Loader/>
    }
  return (
    <div className='prod'>
            <h1>{string}</h1>
            <div className='prod-wrap'>
          {data?.map((x:prodType)=>{
            const {id,image,title,price}=x
            return <Item key={id} item={x}/>
          })}
          </div>
        </div>
  )
}

export default Shop
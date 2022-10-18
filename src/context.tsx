import { useState, useContext, useReducer, useEffect,createContext} from 'react'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

export type prodType={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:any
}

const AppContext=createContext<{
    openCart:boolean,
    setOpenCart:(s:boolean)=>void,
    categ:string[],
    products:prodType[]
}>({
    openCart:false,
    setOpenCart:()=>{},
    categ:[],
    products:[]
})

const fetchCateg=async()=>{
    const data= await axios.get('https://fakestoreapi.com/products/categories')
    return data?.data
}
const fetchData=async()=>{
    const data= await axios.get('https://fakestoreapi.com/products/')
    return data?.data
  }
const AppProvider:React.FC<any>=({children})=>{
    const [openCart,setOpenCart]=useState(false)
    const {data:categ}=useQuery(['categ'],fetchCateg)
    const {data:products,isLoading}=useQuery(['products'],fetchData)

return <AppContext.Provider value={{products,categ,openCart,setOpenCart}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
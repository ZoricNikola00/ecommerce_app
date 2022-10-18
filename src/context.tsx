import { useState, useContext, useReducer,createContext,Dispatch} from 'react'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import { reducer } from './reducer'

export type prodType={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:any
}
export type initialCartType={
    cart:prodType[],
    total:number,
    amount:number
}
const initialState={
    cart:[],
    total:0,
    amount:0,
}
const AppContext=createContext<{
    state: initialCartType;
    addToCart:(i:number,data:prodType)=>void,
    openCart:boolean,
    setOpenCart:(s:boolean)=>void,
    categ:string[],
    products:prodType[]
}>({
    state: initialState,
    addToCart:()=>{},
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
    const [state,dispatch]=useReducer(reducer,initialState)
    
    const addToCart=(id:number,data:prodType)=>{
        dispatch({type:'ADD',id:id,data:data})
    }
    console.log(state.cart)
return <AppContext.Provider value={{addToCart,state,products,categ,openCart,setOpenCart}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
import { useState, useContext, useReducer, useEffect,createContext} from 'react'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

const AppContext=createContext<{
    openCart:boolean,
    setOpenCart:(s:boolean)=>void,
    categ:string[]
}>({
    openCart:false,
    setOpenCart:()=>{},
    categ:[]
})

const fetchCateg=async()=>{
    const data= await axios.get('https://fakestoreapi.com/products/categories')
    return data?.data
}

const AppProvider:React.FC<any>=({children})=>{
    const [openCart,setOpenCart]=useState(false)
    const {data:categ}=useQuery(['categ'],fetchCateg)

return <AppContext.Provider value={{categ,openCart,setOpenCart}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
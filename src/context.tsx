import { useState, useContext, useReducer, useEffect,createContext} from 'react'

const AppContext=createContext({})

const AppProvider:React.FC<any>=({children})=>{
return <AppContext.Provider value=''>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
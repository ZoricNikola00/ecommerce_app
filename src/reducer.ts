
export const reducer = (state: any, action: any) => {
    if(action.type==='ADD'){
        if(action.type==='ADD'){
            if(state.cart.some((x:any)=>x.id===action.id)){
                return {...state, cart:state.cart.map((x:any)=>x.id===action.id?({...x,amount:x.amount+1}):x)}
            }
            else{
            return {...state, cart:[...state.cart,{...action.data,amount:1}]}
           }}
    }
    if(action.type==='PLUS'){
        return {...state, cart:state.cart.map((x:any)=>x.id===action.id?({...x,amount:x.amount+1}):x)}
       }
    if(action.type==='MINUS'){
        if(state.cart.find((x:any)=>x.id===action.id).amount===1){
            return {...state, cart:state.cart.filter((x:any)=>x.id!==action.id)}
        }
        return {...state, cart:state.cart.map((x:any)=>x.id===action.id?({...x,amount:x.amount-1}):x)}
       }
    if(action.type==='TOTAL'){
        return {...state,amount:state.cart.reduce((a:number,b:any)=>a+b.amount,0),total:state.cart.reduce((a:number,b:any)=>a+b.amount*b.price,0).toFixed(2)}
    }
    if(action.type==='DELETE'){
        return {...state,cart:state.cart.filter((x:any)=>x.id!==action.id)}
    }    
   }
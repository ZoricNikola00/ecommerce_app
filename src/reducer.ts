
export const reducer = (state: any, action: any) => {
    if(action.type==='ADD'){
        return {...state,cart:[...state.cart,{...action.data,amount:1}]}
    }
   }
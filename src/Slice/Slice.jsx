import { createSlice } from "@reduxjs/toolkit";


const MySlice = createSlice(
    {
        name: "Cart",
        initialState: {
         cartitems:   [],
        toggle:false},
        reducers: {
            addtocart:(state,action)=>{ state.cartitems.push({...action.payload,quantity:1})},
            removetocart:(state,action)=>{state.cartitems= state.cartitems.filter((items)=>items.id!==action.payload)},
            clearcart:(state,action)=>{state.cartitems=[]},
            increment: (state,action)=>{
                const existingproduct = state.cartitems.find((items)=>items.id===action.payload)
                if(existingproduct){
                    existingproduct.quantity+=1;
                }
            },
            decrement:(state,action)=>{
                const existingproduct = state.cartitems.find((items)=>items.id===action.payload)
                if(existingproduct&&existingproduct.quantity>1){
                    existingproduct.quantity-=1;
                }
            },
            togglefun:(state)=>{state.toggle=! state.toggle}
        }
    }
)

export const {addtocart,removetocart,clearcart,increment,decrement,togglefun}= MySlice.actions
export default MySlice.reducer;
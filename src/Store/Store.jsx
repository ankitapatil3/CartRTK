import { configureStore } from "@reduxjs/toolkit";
import MySlice from "../Slice/Slice";


export const Store = configureStore(
    {
        reducer:{
            mcart:MySlice
        }
    }
)
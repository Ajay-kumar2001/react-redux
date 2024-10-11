import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import { featchTodos } from "../../Apis/todoApiServes"



const todoSlice=createSlice({
    name:"todos",
    
    initialState:{isLoading:false,data:null,isError:false},
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(featchTodos.pending,(state,action)=> { state.isLoading=true })
        builder.addCase(featchTodos.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload
        })
        builder.addCase(featchTodos.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true

        })
    }
        
})
export default todoSlice.reducer
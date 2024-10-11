
import { createAsyncThunk } from "@reduxjs/toolkit"
export const featchTodos=createAsyncThunk("featchTodos",async()=>{
    const response=await fetch("https://dummyjson.com/todos")
    return response.json()
})
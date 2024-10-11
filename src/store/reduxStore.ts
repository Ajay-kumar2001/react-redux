import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./slices/conterSlice";
import todoReducer from "./slices/todoSlice"
const store = configureStore({ 
    reducer: {
    counter:counterReducer,
    todos:todoReducer
} })
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
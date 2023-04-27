const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    value:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value+=1
        },
        decreament:(state)=>{
            state.value-=1
        },
        // oldenway = action=>action.type,action.paylod
        increamentByvalue:(state,action)=>{
            state.value+=action.payload
        }
    }
})
export const {increament,decreament,increamentByvalue}=counterSlice.actions
export default counterSlice.reducer
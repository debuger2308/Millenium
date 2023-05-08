import { createSlice } from "@reduxjs/toolkit";

const lcBagCounter = JSON.parse(localStorage.getItem('bagItems'))
let bagSum = 0
lcBagCounter?.map((item)=>{
    bagSum += Number(item.price.replace(/\D/g, ''))
})
const bagSumSlice = createSlice({
    name: 'bagSum',
    initialState: {
        bagSum: bagSum
    },
    reducers: {
        changeBagSum(state, action) {
            state.bagSum = action.payload
        }
    }
})

export const { changeBagSum } = bagSumSlice.actions
export default bagSumSlice.reducer
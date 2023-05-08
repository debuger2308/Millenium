
import { configureStore} from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import filterInputReducer from "./filterInputReducer";
import bagSumReducer from "./bagSumReducer";

export default configureStore({
    reducer:{
        bagCount: countReducer,
        inputValue: filterInputReducer,
        bagSum: bagSumReducer
    }
})
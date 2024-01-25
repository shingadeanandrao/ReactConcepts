import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeSlice"
import studentReducer from './studentSlice'


const store = configureStore(
    {
        reducer : {

            employee : employeeReducer
            // student :studentReducer

        }
    }
)

export default store;
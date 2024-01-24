import { createSlice } from "@reduxjs/toolkit"


const initialState = {

    employee : []
}

const employeeSlice = createSlice(
    {
        name : 'employee',
        initialState,
        reducers : {
        
            addEmployee :(employee)=> {

            },

            updateEmployee:(id,updatedEmployee)=>{

            },

            deleteEmployee : (id)=>{

            }
        }
    }
)

export const {addEmployee,updateEmployee,deleteEmployee}=employeeSlice.actions

export default employeeSlice.reducer;
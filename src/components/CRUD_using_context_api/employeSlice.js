import { createSlice } from "@reduxjs/toolkit"


const initialState = {

    employees : []
}

const employeeSlice = createSlice(
    {
        name : 'employee',
        initialState,
        reducers : {
        
            addEmployee :(state, actions)=> {
            state.employees.push(actions.payload)
            },

            updateEmployee:(state,actions)=>{

               const {id,updatedEmployee}= actions.payload
               const index=state.employees.findIndex((emp)=>emp.id===id)
               if(index !== -1){
                state.employees[index]={...state.employees[index],...updatedEmployee}
               }
            },

            deleteEmployee : (state,actions)=>{
               state.employees= state.employees.filter(employee=>employee.id!== actions.payload)
                

            }
        }
    }
)

export const {addEmployee,updateEmployee,deleteEmployee}=employeeSlice.actions

export default employeeSlice.reducer;
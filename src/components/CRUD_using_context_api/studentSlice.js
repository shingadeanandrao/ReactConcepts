import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    students :[]
}

const studentSlice = createSlice(
    {
        name:'student',
        initialState,
        reducers :{

            addStudent :(state,actions)=>{
                state.students.push(actions.payload)

            },

            updateStudent :(state,actions)=>{
                const {id,updatedStudent}= actions.payload
               const index=state.students.findIndex((emp)=>emp.id===id)
               if(index !== -1){
                state.students[index]={...state.students[index],...updatedStudent}
               }
            },

            deleteStudent : (state,actions)=>{
                state.students=state.employees.filter(student=>student.id !== actions.payload)
            }

        }
    }
)

export const {addStudent,updateStudent,deleteStudent}=studentSlice.actions;
export default studentSlice.reducer;

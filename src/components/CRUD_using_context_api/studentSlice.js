import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    student :[]
}

const studentSlice = createSlice(
    {
        name:'student',
        initialState,
        reducers :{

            addStudent :(student)=>{

            },

            updateStudent :(id, updatedStudent)=>{

            },

            deleteEmployee : (id)=>{
                
            }

        }
    }
)
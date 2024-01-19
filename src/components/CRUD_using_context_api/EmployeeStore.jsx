import { createContext, useState } from "react";


export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) =>{

        const[employees, setEmployee] = useState([])

        const addEmployee=(employee)=>{
                setEmployee(...employees, employee)
        }

        return(

            <EmployeeContext.Provider value={{employees, addEmployee}}>
                {children}
            </EmployeeContext.Provider>

        )

}
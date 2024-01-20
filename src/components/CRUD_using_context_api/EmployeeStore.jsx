import { createContext, useState } from "react";


export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) =>{

        const[employees, setEmployee] = useState([])

        const addEmployee=(employee)=>{
                setEmployee([...employees, employee])
        }

        const updateEmployee = (id, updatedEmployee) =>{
            setEmployee(
                employees.map((employee)=> employee.id===id ? updatedEmployee : employee)
            )
        }

        const deleteEmployee=(id)=>{
            setEmployee( employees.filter((employee)=> employee.id !== id))
        }

        return(

            <EmployeeContext.Provider value={{employees, addEmployee, updateEmployee,deleteEmployee}}>
                {children}
            </EmployeeContext.Provider>

        )

}
import React, { createContext, useEffect, useState } from "react";
import Employees from "../Types/Employees";
import { getAllEmployees } from "../service/Feth";

type EmployeesContextType = {
    employees: Employees[],
    filteredEmployees: Employees[],
    setFilteredEmployees: React.Dispatch<React.SetStateAction<Employees[]>>,
};

export const EmployeesContext = createContext<EmployeesContextType>({} as EmployeesContextType);

export function EmployeesProvider({ children }: { children: React.ReactNode }) {
    const [employees, setEmployees] = useState<Employees[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employees[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAllEmployees();
            setEmployees(data);
            setFilteredEmployees(data);
        }
        fetchData();
    }, []);

    return (
        <EmployeesContext.Provider value={{employees, filteredEmployees, setFilteredEmployees }}>
            {children}
        </EmployeesContext.Provider>
    );
}

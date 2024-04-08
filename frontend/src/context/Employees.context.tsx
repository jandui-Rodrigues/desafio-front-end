import React, { createContext, useEffect, useMemo, useState } from "react";
import Employees from "../Types/Employees";
import { getAllEmployees } from "../service/Feth";
import filterEmployees from "../utils/FilterEmployees";

type EmployeesContextType = {
    employees: Employees[],
    filteredEmployees: Employees[],
    setFilteredEmployees: React.Dispatch<React.SetStateAction<Employees[]>>,
    employeeFilter: (value: string) => Employees[]
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

    const  employeeFilter = useMemo(() => (value: string) => filterEmployees(value, employees), [employees]);

    return (
        <EmployeesContext.Provider value={{employees, filteredEmployees, setFilteredEmployees, employeeFilter }}>
            {children}
        </EmployeesContext.Provider>
    );
}

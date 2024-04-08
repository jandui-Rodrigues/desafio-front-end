import Employees from "../Types/Employees";

export const filterEmployees = (value: string, employees: Employees[]) => {
  if (!value || typeof value !== "string" || value.length === 0) {
    return employees;
  }

  const lowerCaseValue = value.toLowerCase();
  return employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(lowerCaseValue) ||
      employee.job.toLowerCase().includes(lowerCaseValue) ||
      employee.admission_date.toLowerCase().includes(lowerCaseValue) ||
      employee.phone.toLowerCase().includes(lowerCaseValue)
    );
  });
};

export default filterEmployees;

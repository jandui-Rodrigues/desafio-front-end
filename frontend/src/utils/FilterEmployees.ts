import Employees from "../Types/Employees";
// Exemplo de uso:
// a funçao recebe um valor e deve procurar por esse valor no array de objetos e retornar um novo array com os objetos que contem o valor, podendo ser o nome, o job, a data de admissão ou o telefone
// {
//     "id": 10,
//     "name": "Fernanda",
//     "job": "Front-end",
//     "admission_date": "2021-05-01T00:00:00.000Z",
//     "phone": "5551234567890",
//     "image": "https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png"
//   }

const filterEmployees = (value: string, employees: Employees[]) => {
    return employees.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(value.toLowerCase()) ||
            employee.job.toLowerCase().includes(value.toLowerCase()) ||
            employee.admission_date.toLowerCase().includes(value.toLowerCase()) ||
            employee.phone.toLowerCase().includes(value.toLowerCase())
        );
    });
}

export default filterEmployees;
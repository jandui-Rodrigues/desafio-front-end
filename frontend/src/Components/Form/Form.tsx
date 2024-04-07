import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { EmployeesContext } from "../../context/Employees.context";
import filterEmployees from "../../utils/FilterEmployees";

const WrapperForm = styled.form`
  display: flex;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray_10};
  border-radius: 100px;
`;

function Form() {
  const { employees, setFilteredEmployees } = useContext(EmployeesContext);
  let valueInputShearch = "";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueInputShearch = e.target.value;
  };
  const handle = () => {
    const newEmployees = filterEmployees(valueInputShearch, employees)
    setFilteredEmployees(newEmployees);
  };
  return (
    <WrapperForm>
      <Input type="text" placeholder="Pesquisar" onChange={onChange} />
      <Button type="button" handle={handle} />
    </WrapperForm>
  );
}

export default Form;

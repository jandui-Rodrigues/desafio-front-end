import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { EmployeesContext } from "../../context/Employees.context";

const WrapperForm = styled.form`
  display: flex;
  background: #fff;
  border-radius: 100px;
`;

function Form() {
  const { employeeFilter, setFilteredEmployees } = useContext(EmployeesContext);
  let valueInputShearch = "";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueInputShearch = e.target.value;
  };
  const handle = () => {
    const employee = employeeFilter(valueInputShearch);
    setFilteredEmployees(employee);

  };
  return (
    <WrapperForm>
      <Input type="text" placeholder="Pesquisar" onChange={onChange} />
      <Button type="button" handle={handle} />
    </WrapperForm>
  );
}

export default Form;

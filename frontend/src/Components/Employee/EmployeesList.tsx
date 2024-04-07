import { useContext, useEffect, useState } from "react";
import EmployeesMobile from "./EmployeesMobile";
import { EmployeesContext } from "../../context/Employees.context";
import ellipse from "../../../assets/Ellipse 1.svg";
import HeaderEmployee from "./HeaderEmployee";
import EmployeeDesktop from "./EmployeeDesktop";
import { Td } from "../Table/Td.style";
import { Tr } from "../Table/Tr.style";
import { Thead } from "../Table/Thead.style";

function EmployeesList() {
  const { filteredEmployees } = useContext(EmployeesContext);

  const [component, setComponent] = useState(() =>
    window.innerWidth > 568 ? "desktop" : "mobile"
  );

  const handleResize = () => {
    const newComponent = window.innerWidth > 568 ? "desktop" : "mobile";
    setComponent(newComponent);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsivety: { [key: string]: JSX.Element } = {
    mobile: (
      <div>
        {filteredEmployees.map((employee) => (
          <EmployeesMobile key={employee.name} employee={employee} />
        ))}
      </div>
    ),
    desktop: (
      <div>
        {filteredEmployees.map((employee) => (
          <EmployeeDesktop key={employee.name} employee={employee} />
        ))}
      </div>
    ),
  };

  return (
    <>
      {component === "mobile" ? (
        <HeaderEmployee>
          <h3>Foto</h3>
          <h3>Nome</h3>
          <img src={ellipse} alt="Ellipse" />
        </HeaderEmployee>
      ) : (
        <Thead>
          <Tr>
            <Td>Foto</Td>
            <Td>Nome</Td>
            <Td>Cargo</Td>
            <Td>Data de admissão</Td>
            <Td>Telefone</Td>
          </Tr>
        </Thead>
      )}
      {filteredEmployees.length !== 0 && responsivety[component]}
    </>
  );
}

export default EmployeesList;

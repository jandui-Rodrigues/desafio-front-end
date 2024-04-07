import styled from "styled-components";
import Employees from "../../Types/Employees";
import convertDataIso from "../../utils/ConvertDate";
import ConvertPhone from "../../utils/ConvertPhone";
import { Td } from "../Table/Td.style";
import { Tr } from "../Table/Tr.style";

type EmployeeDesktopProps = {
  employee: Employees;
};

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const TrDesktop = styled(Tr)`
border-bottom: 1px solid ${({ theme }) => theme.colors.gray_10};
background-color: ${({ theme }) => theme.colors.white};
    
`

function EmployeeDesktop({ employee }: EmployeeDesktopProps) {
  return (
    <Table>
      <tbody>
        <TrDesktop>
          <Td>
            <img src={employee.image} alt={employee.name} />
          </Td>
          <Td>{employee.name}</Td>
          <Td>{employee.job}</Td>
          <Td>{convertDataIso(employee.admission_date)}</Td>
          <Td>{ConvertPhone(employee.phone)}</Td>
        </TrDesktop>
      </tbody>
    </Table>
  );
}

export default EmployeeDesktop;

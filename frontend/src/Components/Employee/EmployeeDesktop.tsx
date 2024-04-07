import styled from "styled-components";
import Employees from "../../Types/Employees";
import convertDataIso from "../../utils/ConvertDate";
import ConvertPhone from "../../utils/ConvertPhone";

type EmployeeDesktopProps = {
  employee: Employees;
};

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Tr = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_10};
`;

const Td = styled.td`
  flex: 1;
  font-size:  1.25rem;
  background: transparent;
  padding: 0.5rem 3rem;
  img {
    border-radius: 50%;
    width: ${({ theme }) => theme.spacing.xxl};
  }
`;

function EmployeeDesktop({ employee }: EmployeeDesktopProps) {
  return (
    <Table>
      <tbody>
        <Tr>
          <Td>
            <img src={employee.image} alt={employee.name} />
          </Td>
          <Td>{employee.name}</Td>
          <Td>{employee.job}</Td>
          <Td>{convertDataIso(employee.admission_date)}</Td>
          <Td>{ConvertPhone(employee.phone)}</Td>
        </Tr>
      </tbody>
    </Table>
  );
}

export default EmployeeDesktop;

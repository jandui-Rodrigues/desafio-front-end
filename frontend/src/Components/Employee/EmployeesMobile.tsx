import { useState } from "react";
import Employees from "../../Types/Employees";
import styled from "styled-components";
import down from "../../../assets/chevron-down.svg";
import up from "../../../assets/chevron-up.svg";
import convertDataIso from "../../utils/ConvertDate";
import ConvertPhone from "../../utils/ConvertPhone";

export type PropEmployee = {
  employee: Employees;
};

const EmployeesMobileStyle = styled.div``;

const HeaderEmployee = styled.div`
background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_10};
    img {
      border-radius: 50%;
    }
    button {
      background-color: transparent;
      border: none;
    }
`;

const BodyEmployee = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.gray_10};
`;

function EmployeesMobile({ employee }: PropEmployee) {
  const [infos, setInfos] = useState<boolean>(false);
  return (
    <>
      <EmployeesMobileStyle>
        <HeaderEmployee>
          <img width="50px" src={employee.image} alt={employee.name} />
          <p>{employee.name}</p>
          <button onClick={() => setInfos(!infos)}>
            {infos ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
          </button>
        </HeaderEmployee>
        {infos && (
          <>
            <BodyEmployee>
              <h4>Cargo</h4>
              <p>{employee.job}</p>
            </BodyEmployee>
            <BodyEmployee>
              <h4>Data de admissão</h4>
              <p>{convertDataIso(employee.admission_date)}</p>
            </BodyEmployee>
            <BodyEmployee>
              <h4>Telefone</h4>
              <p>{ConvertPhone(employee.phone)}</p>
            </BodyEmployee>
          </>
        )}
      </EmployeesMobileStyle>
    </>
  );
}

export default EmployeesMobile;

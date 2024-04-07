import styled from "styled-components";
import Form from "./Form/Form";
import EmployeesList from "./Employee/EmployeesList";

const WrapperStyle = styled.div`
  margin: 1.5rem 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: start;
    font-size: large;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const WrapperConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`;

function Wrapper() {
    return (
        <WrapperStyle>
            <WrapperConteiner>
                <h2>Funcionários</h2>
                <Form />
            </WrapperConteiner>
            <EmployeesList/>
        </WrapperStyle>
    );
}

export default Wrapper;

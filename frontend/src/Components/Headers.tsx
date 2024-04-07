import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;

  img {
    width: ${({ theme }) => theme.spacing.xxl};
    background: ${({ theme }) => theme.colors.white};
  }
`;

function Headers() {
  return (
    <HeaderStyle>
      <img src="../assets/logo.svg" alt="" />
    </HeaderStyle>
  )
}

export default Headers
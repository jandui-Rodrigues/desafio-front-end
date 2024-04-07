import styled from "styled-components";

export const Thead = styled.thead`
  width: 100%;
  font-weight: 600;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary} 80%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  border-radius: 5px 5px 0 0;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
`;

import styled from "styled-components";

export const Td = styled.td`
  flex: 1;
  font-size:  1.25rem;
  background: transparent;
  padding: 0.5rem 3rem;
  img {
    border-radius: 50%;
    width: ${({ theme }) => theme.spacing.xxl};
  }
`;

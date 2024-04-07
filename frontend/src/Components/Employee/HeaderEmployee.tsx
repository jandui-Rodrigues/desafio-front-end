import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 4rem;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary} 80%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  border-radius: 5px 5px 0 0;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

type HeaderProps = {
    children: React.ReactNode;
};
function HeaderEmployee({children}: HeaderProps) {
  return (
    <HeaderStyle>
      {children}
    </HeaderStyle>
  )
}

export default HeaderEmployee;
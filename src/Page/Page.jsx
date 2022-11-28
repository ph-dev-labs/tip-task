import styled from 'styled-components';
import Calculator from '../components/Calculator';
import Logo from '../components/Logo';

const StyledPage = styled.div`
  font-family: ${({ theme }) => theme.font.main};
  background-color: ${({ theme }) => theme.colors.lightGrayCyan};
  min-height: 100vh;
`;

const StyledPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page() {
  return (
    <StyledPage>
      <StyledPageContainer>
        <Logo />
        <Calculator />
      </StyledPageContainer>
    </StyledPage>
  );
}

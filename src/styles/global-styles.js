import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}
body{
  ${({ theme }) => css`
      background: ${theme.colors.mainBg};
      background: ${theme.colors.mainSBg};
  `}
  height: 100vh;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.family.principalFont};
}
h1{
  font-family: ${({ theme }) => theme.fonts.family.secondaryFont};
}
`;

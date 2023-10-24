import styled, { css } from "styled-components";

export const Section = styled.div`
${({ theme }) => css`
background: ${theme.colors.mainBg};`}
color: #fff;
`;

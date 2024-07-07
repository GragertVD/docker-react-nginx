import styled from 'styled-components';

export const SelectStatusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  p{
    ${props => props.theme.fonts.body_M};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.white};
    margin-bottom: 8px;
  }

  svg{
    fill: ${props => props.theme.colors.mainPurple};
  }
`;



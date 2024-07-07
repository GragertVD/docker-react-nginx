import styled from 'styled-components';


export const BoardColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  h4{
    ${props => props.theme.fonts.heading_S};
    text-transform: uppercase;
    color: ${props => props.theme.colors.mediumGrey};

    display: flex;
    align-items: center;
    &::before{
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: #49C4E5;
      border-radius: 50%;
      margin-right: 12px;
    }
  }

`;

export const ColumnTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;

`;
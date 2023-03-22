import styled from 'styled-components';
import theme from '../../theme';

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  width: 270px;
  background: ${theme.palette.background.base};
  margin: ${theme.spacing(3)};
  padding: ${theme.spacing(4)};
  border-radius: 4px;
`;

export const ButtonsWrapper = styled.div`
  padding: ${theme.spacing(2)} 0;

  & button {
    margin: 0 ${theme.spacing(2)} 0 0;
  }
`;

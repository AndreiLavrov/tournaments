import styled from 'styled-components';
import theme from '../../theme';

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background: ${theme.palette.background.base};
  margin: ${theme.spacing(3)};
  padding: ${theme.spacing(4)};
  border-radius: 4px;

  @media (min-width: 480px) {
    width: 187px;
  }

  @media (min-width: 992px) {
    width: 200px;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: ${theme.spacing(2)} 0;

  & button {
    margin: 0 ${theme.spacing(2)} 0 0;
  }
`;

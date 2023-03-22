import styled from 'styled-components';
import theme from '../../theme';

export const TournamentListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${theme.spacing(3)};
`;

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainText = styled.h4`
  margin: ${theme.spacing(3)} auto;
  text-align: center;
`;

import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button';
import TournamentCard from '../TournamentCard/TournamentCard';
import {
  MainText,
  MainTextWrapper,
  TournamentListWrapper,
} from './TournamentList.styles';

const TournamentList: React.FC = () => {
  const { tournaments, error, loading } = useTypedSelector(
    (state) => state.tournaments
  );
  const { fetchTournaments } = useActions();

  useEffect(() => {
    fetchTournaments('');
  }, []);

  const retryListener = () => {
    fetchTournaments('');
  };

  if (loading) {
    return <MainText>Loading tournaments...</MainText>;
  }

  if (error) {
    return (
      <MainTextWrapper>
        <MainText>Something went wrong.</MainText>
        <Button onClick={retryListener}>Retry</Button>
      </MainTextWrapper>
    );
  }

  return (
    <TournamentListWrapper>
      {tournaments.length > 0 ? (
        tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))
      ) : (
        <MainText>No tournaments found.</MainText>
      )}
    </TournamentListWrapper>
  );
};

export default TournamentList;

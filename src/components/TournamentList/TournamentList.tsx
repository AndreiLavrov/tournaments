import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TournamentCard from '../TournamentCard/TournamentCard';
import Button from '../Button';
import { TournamentListWrapper } from './TournamentList.styles';

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
    return <h4>Loading tournaments...</h4>;
  }

  if (error) {
    return (
      <div>
        <h4>Something went wrong.</h4>
        <Button onClick={retryListener}>Retry</Button>
      </div>
    );
  }

  return (
    <TournamentListWrapper>
      {tournaments.length > 0 ? (
        tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))
      ) : (
        <h4>No tournaments found.</h4>
      )}
    </TournamentListWrapper>
  );
};

export default TournamentList;

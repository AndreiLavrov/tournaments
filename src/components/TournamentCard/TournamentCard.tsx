import React from 'react';
import { validate } from '../../services/validate';
import { useActions } from '../../hooks/useActions';
import { ITournament } from '../../types/tournament';
import Button from '../Button';
import H6 from '../H6';
import { ButtonsWrapper, Card } from './TournamentCard.styles';

interface ITournamentCardProps {
  tournament: ITournament;
}

const TournamentCard: React.FC<ITournamentCardProps> = ({ tournament }) => {
  const { updateTournament, deleteTournament } = useActions();
  const date = new Date(tournament.startDate).toLocaleString('en-GB');

  const editListener = () => {
    let res = prompt('New Tournament Name', tournament.name);

    while (validate(res) === false && res !== null) {
      res = prompt(
        'New Tournament Name must contain only Latin letters, numbers, and spaces, not an empty string or only spaces',
        tournament.name
      );
    }

    if (res === null) return;

    updateTournament({
      ...tournament,
      name: res,
    });
  };

  const deleteListener = () => {
    let res = window.confirm('Do you really want to delete this tournament?');
    if (!res) return;

    deleteTournament(tournament);
  };

  return (
    <Card>
      <H6>{tournament.name}</H6>

      <div>
        <div>Organizer: {tournament.organizer}</div>
        <div>Organizer: {tournament.game}</div>
        <div>
          Organizer: {tournament.participants.current}/
          {tournament.participants.max}
        </div>
        <div>Organizer: {date}</div>
      </div>

      <ButtonsWrapper>
        <Button onClick={editListener}>Edit</Button>
        <Button onClick={deleteListener}>Delete</Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default TournamentCard;

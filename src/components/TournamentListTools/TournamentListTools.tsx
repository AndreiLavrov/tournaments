import React, { ChangeEvent, useEffect, useState } from 'react';
import { validate } from '../../services/validate';
import { useActions } from '../../hooks/useActions';
import useDebounce from '../../hooks/useDebounce';
import Button from '../Button';
import Input from '../Input';
import { ToolsWrapper } from './TournamentListTools.styles';

const TournamentListTools: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const { addTournament } = useActions();
  const { fetchTournaments } = useActions();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchTournaments(value);
  }, [debouncedValue]);

  const createTournament = () => {
    let res = prompt('New Tournament Name');
    while (validate(res) === false && res !== null) {
      res = prompt(
        'Tournament Name must contain only Latin letters, numbers, and spaces, not an empty string or only spaces'
      );
    }

    if (res === null) return;

    addTournament(res);
  };

  return (
    <ToolsWrapper>
      <Input
        type="text"
        placeholder="Search tournament ..."
        defaultValue="Search tournament ..."
        value={value}
        onChange={handleChange}
      />
      <Button onClick={createTournament}>Create tournament</Button>
    </ToolsWrapper>
  );
};

export default TournamentListTools;

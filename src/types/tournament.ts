export interface IParticipants {
  current: number;
  max: number;
}

export interface ITournament {
  game: string;
  id: string;
  name: string;
  organizer: string;
  participants: IParticipants;
  startDate: string;
}

export interface ITournamentState {
  tournaments: ITournament[];
  loading: boolean;
  error: null | string;
}

export enum TournamentActionTypes {
  FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS',
  FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS',
  FETCH_TOURNAMENTS_ERROR = 'FETCH_TOURNAMENTS_ERROR',
  UPDATE_TOURNAMENTS = 'UPDATE_TOURNAMENTS',
  ADD_TOURNAMENTS = 'ADD_TOURNAMENTS',
  DELETE_TOURNAMENT = 'DELETE_TOURNAMENT',
}

interface FetchTournamentsAction {
  type: TournamentActionTypes.FETCH_TOURNAMENTS;
}

interface FetchTournamentsSuccessAction {
  type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS;
  payload: ITournament[];
}

interface FetchTournamentsErrorAction {
  type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR;
  payload: string;
}

interface AddTournamentsAction {
  type: TournamentActionTypes.ADD_TOURNAMENTS;
  payload: ITournament;
}

interface UpdateTournamentsAction {
  type: TournamentActionTypes.UPDATE_TOURNAMENTS;
  payload: ITournament;
}

interface DeleteTournamentAction {
  type: TournamentActionTypes.DELETE_TOURNAMENT;
  payload: ITournament;
}

export type TournamentAction =
  | FetchTournamentsAction
  | FetchTournamentsErrorAction
  | FetchTournamentsSuccessAction
  | AddTournamentsAction
  | UpdateTournamentsAction
  | DeleteTournamentAction;

import {
  ITournamentState,
  TournamentAction,
  TournamentActionTypes,
} from '../types/tournament';

const initialState: ITournamentState = {
  tournaments: [],
  loading: false,
  error: null,
};

const tournamentReducer = (
  state = initialState,
  action: TournamentAction
): ITournamentState => {
  switch (action.type) {
    case TournamentActionTypes.FETCH_TOURNAMENTS:
      return { loading: true, error: null, tournaments: [] };
    case TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS:
      return { loading: false, error: null, tournaments: action.payload };
    case TournamentActionTypes.FETCH_TOURNAMENTS_ERROR:
      return { loading: false, error: action.payload, tournaments: [] };
    case TournamentActionTypes.UPDATE_TOURNAMENTS:
      return {
        ...state,
        tournaments: state.tournaments.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case TournamentActionTypes.ADD_TOURNAMENTS:
      return { ...state, tournaments: [action.payload, ...state.tournaments] };
    case TournamentActionTypes.DELETE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default tournamentReducer;

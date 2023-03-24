import axios from 'axios';
import { Dispatch } from 'redux';

import { API_BASE_URL, API_TOURNAMENTS_URL } from '../constants/api';
import {
  ITournament,
  TournamentAction,
  TournamentActionTypes,
} from '../types/tournament';

export const fetchTournaments = (query: string) => {
  return async (dispatch: Dispatch<TournamentAction>) => {
    try {
      dispatch({ type: TournamentActionTypes.FETCH_TOURNAMENTS });
      const response = await axios.get(`${API_TOURNAMENTS_URL}?q=${query}`);
      dispatch({
        type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
        payload: 'An error occurred',
      });
    }
  };
};

export const addTournament = (name: string) => {
  return async (dispatch: Dispatch<TournamentAction>) => {
    try {
      // by conditions of task we shouldn't show any loading here now
      // dispatch({ type: TournamentActionTypes.FETCH_TOURNAMENTS });
      const response = await axios.post(API_TOURNAMENTS_URL, { name });
      dispatch({
        type: TournamentActionTypes.ADD_TOURNAMENTS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
        payload: 'An error occurred',
      });
    }
  };
};

// left such structure for future developing with request
export const updateTournament = (tournament: ITournament) => {
  return async (dispatch: Dispatch<TournamentAction>) => {
    try {
      // by conditions of the task "tournament name updates immediately in the UI through an optimistic update, without any loading indicators, and a fetch call to the fake REST API."
      /*dispatch({ type: TournamentActionTypes.FETCH_TOURNAMENTS });
      const response = await axios.patch(`${API_BASE_URL}/tournaments/${tournament.id}`, { name: tournament.name });
      dispatch({ type: TournamentActionTypes.UPDATE_TOURNAMENTS, payload: response.data });*/
      dispatch({
        type: TournamentActionTypes.UPDATE_TOURNAMENTS,
        payload: tournament,
      });
    } catch (e) {
      dispatch({
        type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
        payload: 'An error occurred',
      });
    }
  };
};

export const deleteTournament = (tournament: ITournament) => {
  return async (dispatch: Dispatch<TournamentAction>) => {
    try {
      // such order because by the conditions of the task "the tournament is deleted immediately in the UI using an optimistic delete, without any loading indicators, and a fetch call to the fake REST API is made"
      dispatch({
        type: TournamentActionTypes.DELETE_TOURNAMENT,
        payload: tournament,
      });
      await axios.delete(`${API_BASE_URL}/tournaments/${tournament.id}`);
    } catch (e) {
      dispatch({
        type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
        payload: 'An error occurred',
      });
    }
  };
};

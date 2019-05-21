/* eslint-disable no-trailing-spaces */

import { Reducer } from 'react';
import { Action } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState, any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_SUCESS:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: false, data: action.payload.data };
    case RepositoriesTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer as repositoriesReducer };

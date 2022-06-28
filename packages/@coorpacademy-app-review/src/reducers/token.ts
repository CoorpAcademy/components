import set from 'lodash/fp/set';
import {StoreState} from '../types/store-state';
import {DataState} from '../types/data';

// -----------------------------------------------------------------------------

export const initialState: DataState['token'] = null;

// -----------------------------------------------------------------------------

export const setToken = (token: string, state: DataState): DataState => set('token', token, state);

// -----------------------------------------------------------------------------

export const getToken = (appState: StoreState): StoreState['data']['token'] => appState.data.token;

// -----------------------------------------------------------------------------

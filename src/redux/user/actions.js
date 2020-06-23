import { SIGN_IN, START_FETCH,LOG_OUT } from './constants';

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const startFetch = () => ({
  type: START_FETCH,
});
export const logOut = () => ({
  type: LOG_OUT,
});

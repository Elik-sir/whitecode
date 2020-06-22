import { SIGN_IN, START_FETCH } from './constants';

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const startFetch = () => ({
  type: START_FETCH,
});

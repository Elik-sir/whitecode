import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import newsReducer from './news/reducer';
export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

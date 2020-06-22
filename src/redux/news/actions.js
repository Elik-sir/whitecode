import {
  ADD_NEWS,
  DELETE_NEWS,
  SET_EDITING_NEWS,
  EDIT_NEWS,
} from './constants';

export const addNews = (news) => ({
  type: ADD_NEWS,
  payload: news,
});
export const deleteNews = (newsID) => ({
  type: DELETE_NEWS,
  payload: newsID,
});
export const setEditingNews = (news) => ({
  type: SET_EDITING_NEWS,
  payload: news,
});
export const editNews = (news) => ({
  type: EDIT_NEWS,
  payload: news,
});

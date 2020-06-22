import {
  ADD_NEWS,
  DELETE_NEWS,
  SET_EDITING_NEWS,
  EDIT_NEWS,
} from './constants';

const defaultState = {
  news: [],
  editingNews: null,
};

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: [
          ...state.news,
          {
            ...action.payload,
            id: state.news.length
              ? state.news[state.news.length - 1].id + 1
              : 1,
            date: Date(),
          },
        ],
      };
    case DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((oneNews) => oneNews.id !== action.payload),
      };
    case SET_EDITING_NEWS:
      return {
        ...state,
        editingNews: state.news.filter(
          (oneNews) => oneNews.id === Number(action.payload),
        )[0],
      };
    case EDIT_NEWS:
      return {
        ...state,
        news: state.news.map((news) =>
          news.id === action.payload.id ? action.payload : news,
        ),
      };
    default:
      return state;
  }
};

export default newsReducer;

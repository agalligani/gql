/** src/_reducers/taxonomyReducer.js - used in MainNav */
import { initialTaxonomy } from "./initialState";
import {
  INITIALIZE_TAGS,
  REQUEST_TAGS,
  RECEIVE_TAGS,
  SET_CURRENT_TERM,
  REQUEST_POSTS_BY_TERM,
  RECEIVE_POSTS_BY_TERM,
  RECEIVE_TAG_ARTICLE_REQUEST,
  TAG_ARTICLE,

  /* change this ...*/
} from "../_actions/_postActions";

export default (state = initialTaxonomy, action) => {
  switch (action.type) {
    case INITIALIZE_TAGS:
      return initialTaxonomy;

    case REQUEST_TAGS: {
      return state;
    }

    case RECEIVE_TAGS: {
      return { ...state, terms: action.data };
    }

    case REQUEST_POSTS_BY_TERM: {
      return {
        ...state,
        currentTerm: action.payload.term,
        currentVocabulary: action.payload.vocabulary,
      };
    }

    case RECEIVE_POSTS_BY_TERM: {
      return { ...state, postsByTerm: action.payload };
    }

    case SET_CURRENT_TERM: {
      return { ...state, currentArticleJSON: action.data, isLoading: false };
    }

    case RECEIVE_TAG_ARTICLE_REQUEST: {
      console.log(action.payload);
      return { ...state };
    }

    default:
      return state;
  }
};

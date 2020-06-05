/** src/_reducers/taxonomyReducer.js - used in MainNav */
import { initialTaxonomy } from "./initialState";
import {
  INITIALIZE_TAGS,
  REQUEST_TAGS,
  RECEIVE_TAGS,
  RECEIVE_TAGs_JSON,
  SET_CURRENT_TERM,
  REQUEST_POSTS_BY_TERM,
  RECEIVE_POSTS_BY_TERM,
  /* change this ...*/
} from "../_actions/_postActions";

export default (state = initialTaxonomy, action) => {
  switch (action.type) {
    case INITIALIZE_TAGS:
      return initialTaxonomy;

    case REQUEST_TAGS: {
      console.log("action!", action);
      return state;
    }

    case RECEIVE_TAGS: {
      return { ...state, terms: action.data };
    }

    case REQUEST_POSTS_BY_TERM: {
      console.log("request posts by term", action);
      return {
        ...state,
        currentTerm: action.payload.term,
        currentVocabulary: action.payload.vocabulary,
      };
    }

    case RECEIVE_POSTS_BY_TERM: {
      console.log("reCEIVE posts by term", action.payload);
      return { ...state, postsByTerm: action.payload };
    }

    case SET_CURRENT_TERM: {
      console.log("action", action);
      return { ...state, currentArticleJSON: action.data, isLoading: false };
    }
    default:
      return state;
  }
};

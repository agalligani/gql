import { taxonomyList } from "../../graphql";
import { tagArticle } from "../../graphql";

/* TAGS could be any vocabulary ... here just calling it TAGS */

export const INITIALIZE_TAGS = "INITIALIZE_TAGS";
export const REQUEST_TAGS = "REQUEST_TAGS";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAGS_JSON = "RECEIVE_TAGS_JSON";
export const SET_CURRENT_TERM = "SET_CURRENT_TERM";
export const TAG_ARTICLE = "TAG_ARTICLE";
export const RECEIVE_TAG_ARTICLE_REQUEST = "RECEIVE_TAG_ARTICLE_REQUEST";

export const initializeTags = () => ({
  type: INITIALIZE_TAGS,
});

export const requestTags = () => ({
  type: REQUEST_TAGS,
});

export const receiveTags = (data) => ({
  type: RECEIVE_TAGS,
  data: data,
});

export const receiveTagArticleResponse = (response) => ({
  type: RECEIVE_TAG_ARTICLE_REQUEST,
  payload: response,
});

export const receiveTagsJSON = (data) => ({
  type: RECEIVE_TAGS_JSON,
  data: data,
});

export function fetchTags() {
  return function (dispatch) {
    dispatch(initializeTags());
    dispatch(requestTags());
    return taxonomyList.then(({ data }) => {
      dispatch(receiveTags(data.taxonomyTermQuery.entities));
    });
  };
}

export function tagArticleRequest(data, auth_token, session_token) {
  return function (dispatch) {
    let gqlQuery = tagArticle(data, auth_token, session_token);
    return gqlQuery.then(({ data }) =>
      dispatch(receiveTagArticleResponse(data))
    );
  };
}

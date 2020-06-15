import { API_URL, HAL_JSON_ARTICLE } from "../../config";
import { createArticle } from "../../graphql";
import { dispatch } from "redux";
export const ADD_POST = "ADD_POST";
export const ADD_POST_GQL = "ADD_POST_GQL";
export const PROCESS_POST_RESPONSE = "PROCESS_POST_RESPONSE";
export const PROCESS_POST_RESPONSE_GQL = "PROCESS_POST_RESPONSE_GQL";

/********************* CREATE POSTS ACTIONS ******************/

// export const addArticle = (
//   article,
//   baseURL,
//   basic_auth_token,
//   session_token
// ) => {
//   return (dispatch) => {
//     dispatch(createArticle(article));
//     // dispatch(addArticleGQL(article, baseURL, basic_auth_token, session_token));
//   };
// };

export const addArticle = (article, auth_token, session_token) => {
  return function (dispatch) {
    return createArticle(article, auth_token, session_token)
      .then(
        (response) => console.log(response),
        (error) => console.log("An error occurred", error)
      )
      .then((json) => {
        dispatch({ type: ADD_POST_GQL, action: {} });
      });
  };
};

export const processArticleResponse = (status, response) => {
  return {
    type: PROCESS_POST_RESPONSE,
    status: status,
    response: response,
  };
};

import { articleListByTerm } from "../../graphql";

export const REQUEST_POSTS_BY_TERM = "REQUEST_POSTS_BY_TERM";
export const RECEIVE_POSTS_BY_TERM = "RECEIVE_POSTS_BY_TERM";

//************************* READ ACTIONS **************/
export const requestPostsByTerm = (payload) => ({
  type: REQUEST_POSTS_BY_TERM,
  payload: payload,
});

export const receivePostsByTerm = () => ({
  type: RECEIVE_POSTS_BY_TERM,
});

export function fetchPostsByTerm(payload) {
  return function (dispatch) {
    dispatch(requestPostsByTerm(payload));
    return articleListByTerm.then(({ data }) =>
      dispatch(receivePostsByTerm(data.nodeQuery.entities))
    );
  };
}

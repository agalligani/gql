import { API_URL } from "../../config";
import { articleList } from "../../graphql";

export const INITIALIZE_POSTS = "INITIALIZE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_JSON = "RECEIVE_POST_JSON";

//************************* READ ACTIONS **************/
export const initializePosts = () => ({
  type: INITIALIZE_POSTS,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivePosts = (data) => ({
  type: RECEIVE_POSTS,
  data: data,
});

export const receivedPostJSON = (data) => ({
  type: RECEIVE_POST_JSON,
  data: data,
});

export function fetchPosts(channel) {
  return function (dispatch) {
    dispatch(initializePosts());
    dispatch(requestPosts());
    return articleList.then(({ data }) =>
      dispatch(receivePosts(data.nodeQuery.entities))
    );
    // dispatch(receivedPosts(post_array));
  };
}

export function fetchPostJSON(nid) {
  return function (dispatch) {
    dispatch(initializePosts());
    return fetch(`${API_URL}/node/${nid}?_format=json`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((post_array) => {
        console.log("===>", post_array);

        dispatch(receivedPostJSON(post_array));
      });
  };
}

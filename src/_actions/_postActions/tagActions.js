import { taxonomyList } from "../../graphql";

/* TAGS could be any vocabulary ... here just calling it TAGS */

export const INITIALIZE_TAGS = "INITIALIZE_TAGS";
export const REQUEST_TAGS = "REQUEST_TAGS";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAGS_JSON = "RECEIVE_TAGS_JSON";
export const SET_CURRENT_TERM = "SET_CURRENT_TERM";

//************************* READ ACTIONS **************/
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

export function fetchTagsJSON(nid) {
  return function (dispatch) {
    dispatch(initializeTags());
    /* @TODO -- taxonomyList should receive a VID or VOCAB title */
    return taxonomyList
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((tags_array) => {
        console.log("===>", tags_array);

        dispatch(receiveTagsJSON(tags_array));
      });
  };
}

export const EDIT_POST = "EDIT_POST";

/**************** UPDATE POST ACTIONS */

export const editPost = (payload) => {
  return { type: EDIT_POST, payload: payload };
};

export const editArticle = (baseURL, nid, basic_auth_token, csrf_token) => {
  return {
    type: EDIT_POST,
    baseURL: baseURL,
    nid: nid,
    basic_auth_token: basic_auth_token,
    csrf_token: csrf_token,
  };
};

export const requestArticleUpdate = () => {
  return {
    type: "REQUEST_POST_UPDATE",
  };
};

export const processArticleUpdateResponse = (json) => {
  return {
    type: "REQUEST_POST_UPDATE",
  };
};

export const postArticleUpdate = (payload) => {
  return function (dispatch) {
    dispatch(requestArticleUpdate());
    const requestOptions = {
      method: "PATCH",
      headers: payload.headers,
      // body: JSON.stringify(body),
      redirect: "follow",
    };

    return fetch("www.example.com", requestOptions)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred", error)
      )
      .then((json) => {
        dispatch(processArticleUpdateResponse(json));
      });
  };
};

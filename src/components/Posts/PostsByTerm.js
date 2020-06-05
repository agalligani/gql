import React, { Component } from "react";
import Post from "./Post";
import { fetchPostsByTerm } from "../../_actions/_postActions";
import { useSelector, useDispatch } from "react-redux";

const payload = { vocabulary: "tags", term: "thiphif" };

export const PostsByTerm = () => {
  const dispatch = useDispatch();
  const taxonomy = useSelector((state) => state.taxonomy);
  dispatch(fetchPostsByTerm(payload));

  return (
    <div>
      <h1 className="post_heading">All Posts</h1>
      <p>{taxonomy}</p>
    </div>
  );
};

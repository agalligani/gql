import React, { useEffect } from "react";
import { fetchPostsByTerm } from "../../_actions/_postActions";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "./Post";

export const PostsByTerm = (props) => {
  const { vocab, term } = props.match.params;
  const payload = { vocabulary: vocab, term: term };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByTerm(payload));
  }, [term]);

  const posts = useSelector((state) => state.taxonomy.postsByTerm);

  return (
    <div>
      <h1 className="post_heading">
        {vocab} / {term}
      </h1>
      {posts ? (
        posts.map((post, key) => (
          <div key={key}>
            <Post post={post} />
          </div>
        ))
      ) : (
        <h1>!</h1>
      )}
    </div>
  );
};

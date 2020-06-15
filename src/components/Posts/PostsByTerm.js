import React, { useEffect } from "react";
import { fetchPostsByTerm } from "../../_actions/_postActions";
import { useSelector, useDispatch } from "react-redux";

export const PostsByTerm = (props) => {
  const { vocab, term } = props.match.params;
  const payload = { vocabulary: vocab, term: term };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
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
            <div>
              {post.fieldImage ? <img src={post.fieldImage.url} /> : null}
            </div>
            <div>{post.entityLabel}</div>
            <div>{post.body.value}</div>
          </div>
        ))
      ) : (
        <h1>!</h1>
      )}
    </div>
  );
};

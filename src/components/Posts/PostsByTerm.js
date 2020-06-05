import React, { useEffect } from "react";
import { fetchPostsByTerm } from "../../_actions/_postActions";
import { useSelector, useDispatch } from "react-redux";

const payload = { vocabulary: "tags", term: "thiphif" };

export const PostsByTerm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByTerm(payload));
  }, []);

  const posts = useSelector((state) => state.taxonomy.postsByTerm);

  return (
    <div>
      <h1 className="post_heading">Posts</h1>
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

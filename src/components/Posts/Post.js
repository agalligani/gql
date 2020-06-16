import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { tagArticleRequest } from "../../_actions/_postActions";
import { useSelector, useDispatch } from "react-redux";

export const Post = (props) => {
  const {
    fieldImage,
    entityId,
    entityLabel,
    body,
    entityUrl,
    queryFieldTags,
  } = props.post;

  const payload = { articleId: entityId, termIds: ["13", "14"] };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("article url", entityUrl);
    console.log("article id", entityId);
  }, []);

  const { basic_auth_token, csrf_token, isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    <div>
      {isAuthenticated ? (
        <button
          onClick={() => {
            dispatch(tagArticleRequest(payload, basic_auth_token, csrf_token));
          }}
        >
          Tag Article
        </button>
      ) : null}
      <div>{fieldImage ? <img src={fieldImage.url} /> : null}</div>
      <h2 className="post_title">{entityLabel}</h2>
      {queryFieldTags.entities ? (
        <ul>
          {queryFieldTags.entities.map((t, i) => {
            return (
              <li>
                <a href={`/posts/tags/${t.entityLabel}`}>{t.entityLabel}</a>
              </li>
            );
          })}
        </ul>
      ) : null}
      <div className="body">{body.value}</div>
      <div>
        <a href={entityUrl.path}>Read More</a>
      </div>
    </div>
  );
};
// import { deleteArticle } from "../../_actions/_postActions";

// class PostConnected extends Component {
//   render() {
//     const {
//       title,
//       field_image,
//       body,
//       nid,
//       csrf_token,
//       basic_auth_token,
//     } = this.props.post;
//     return (
//       <div className="post">
//         {field_image}
//         <h2 className="post_title">{title}</h2>
//         <p className="post_message">{body}</p>
//         <div className="control-buttons">
//           <Link to={`/post/${nid}/edit`}>
//             <button className="edit">Edit</button>
//           </Link>
//           <Link to={`/post/${nid}/delete`}>
//             <button className="delete">Delete</button>
//           </Link>

//           {/* <button
//             className="delete"
//             onClick={() =>
//               this.props.dispatch(
//                 deleteArticle(
//                   "http://admin.flambeaucabin.com/",
//                   nid,
//                   basic_auth_token,
//                   csrf_token
//                 )
//               )
//             }
//           >
//             Delete
//           </button> */}
//         </div>
//       </div>
//     );
//   }
// }

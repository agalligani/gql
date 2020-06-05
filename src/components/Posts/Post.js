import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditComponent from "./EditComponent";
import { connect } from "react-redux";
import { deleteArticle } from "../../_actions/_postActions";

class PostConnected extends Component {
  render() {
    const {
      title,
      field_image,
      body,
      nid,
      csrf_token,
      basic_auth_token,
    } = this.props.post;
    return (
      <div className="post">
        {field_image}
        <h2 className="post_title">{title}</h2>
        <p className="post_message">{body}</p>
        <div className="control-buttons">
          <Link to={`/post/${nid}/edit`}>
            <button className="edit">Edit</button>
          </Link>
          <Link to={`/post/${nid}/delete`}>
            <button className="delete">Delete</button>
          </Link>

          {/* <button
            className="delete"
            onClick={() =>
              this.props.dispatch(
                deleteArticle(
                  "http://admin.flambeaucabin.com/",
                  nid,
                  basic_auth_token,
                  csrf_token
                )
              )
            }
          >
            Delete
          </button> */}
        </div>
      </div>
    );
  }
}
export default connect()(PostConnected);

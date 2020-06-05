import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import { fetchPosts } from "../../_actions/_postActions";

export class AllPostConnected extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
        {this.props.posts.map((post) => (
          <div key={post.entityId}>
            <div key={post.entityId}>
              <div>
                {post.fieldImage ? <img src={post.fieldImage.url} /> : null}
              </div>
              <div>{post.entityLabel}</div>
              <div>{post.body.value}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = { getPosts: fetchPosts };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts.data,
    isLoading: state.posts.isLoading,
  };
};

export const AllPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPostConnected);

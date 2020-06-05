import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPostJSON, postArticleUpdate } from "../../_actions/_postActions";

const extract_vals = (post) => {
  let newPost = {};
  Object.keys(post).forEach((k) => {
    newPost[k] =
      post[k].length > 0
        ? post[k][0].value
          ? post[k][0].value
          : post[k][0]
        : null;
  });
  return newPost;
};

class PostEditorWithRouter extends Component {
  state = {
    nid: null,
    title: null,
    body: null,
    image: null,
    image_target: null,
  };

  componentDidMount = async () => {
    const { nid, action } = this.props.match.params;
    await this.props.getPost(nid);
  };

  render() {
    const { post } = this.props;
    if (post === {}) {
      return <h1>loading....</h1>;
    } else {
      let n = extract_vals(this.props.postJSON);
      return (
        <div key={this.props.postJSON.nid} className="post">
          <form className="form" onSubmit={this.handleEdit}>
            <img src={this.props.post.field_image.url} />
            <input
              required
              type="text"
              ref={(input) => (this.getTitle = input)}
              defaultValue={this.props.post.title}
              placeholder="Enter Post Title"
            />
            <br />
            <br />
            <textarea
              required
              rows="5"
              ref={(input) => (this.getMessage = input)}
              defaultValue={this.props.post.message}
              cols="28"
              placeholder="Enter Post"
            />
            <br />
            <br />
            <button>Update</button>
          </form>
        </div>
      );
    }
  }
}

const PostEditorConnected = withRouter(PostEditorWithRouter);

const mapDispatchToProps = { getPost: fetchPostJSON };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.posts.currentArticle,
    postJSON: state.posts.currentArticleJSON,
    postResponse: state.posts.response,
    isLoading: state.posts.isLoading,
  };
};

export const PostEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditorConnected);

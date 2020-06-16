import "../blogs/Blogs.css";
import React, { Component, Fragment } from "react";
import IBlogsState from "../../../models/props/IBlogsState";
import Loader from "../../../components/loader/Loader";
import axios from "../../../axios";
import BlogCard from "../../../components/Items/ThemeCourse/ItemProduct";
class Blogs extends Component<any, any> {
  blogs_list:any = [];
  constructor(props: any) {
    super(props);
    this.state = {
      isEditing: false,
      posts: [],
      totalPosts: 0,
      editPost: null,
      status: '',
      postPage: 1,
      blogsLoading: true,
      editLoading: false
    };
  }

  componentDidMount() {
    
  }

  newBlogHandler = () => {
    this.setState({ isEditing: true });
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <button className="btn primary" onClick={this.newBlogHandler}/>
          <div className="grid" id="main">
            {this.state.blogsLoading && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Loader />
              </div>
            )}
            {this.state.blogsLoading || this.blogs_list}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Blogs;

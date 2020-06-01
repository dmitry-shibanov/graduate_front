import "../blogs/Blogs.css";
import React, { Component, Fragment } from "react";
import IBlogsState from "../../../models/props/IBlogsState";
import Loader from "../../../components/loader/Loader";
import axios from "../../../axios";
import BlogCard from "../../../components/Items/ThemeCourse/ItemProduct";
class Blogs extends Component<any, any> {
  blogs_list = [];
  constructor(props: any) {
    super(props);
    this.state = {
      blogsLoading: true,
    };
  }

  componentDidMount() {
    let params = {};

    axios
      .get("/posts", params)
      .then((response) => {
        console.log(response);
        let data = response.data.slice(0, 15);
        this.blogs_list = data.map((item: any) => {
          return (
            <BlogCard id={12} title={"some title"} price={123} image={""} />
          );
        });
        this.setState({
          blogsLoading: false,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
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

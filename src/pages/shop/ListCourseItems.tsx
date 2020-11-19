import React, { Component, Fragment } from "react";
import axios from "../../axios";
import Loader from "../../components/loader/Loader";
class ListCourseItems extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  state = {
    videos: [],
    videoItems: [],
    loading: true,
  };

  async componentDidMount() {
    // ${this.props.match.params.id}
    const response = await axios.get(`/courses/1`);
    const items = response.data.videos.map((item: any)=>{
        console.log(item)
        return (
            <li key={item.id} onClick={() => this.props.history.push(`/videos/${item.id}`)} className="list-group-item">
            <div className="video-list media">
                <div className="media-body">
                    <div className="media-heading">{item.url.replace("assets/video/flutter/Camera31/", '')}</div>
                </div>
            </div>
        </li>
        )
    });

    this.setState({videos: response.data.videos, videoItems: items, loading: false})
  }

  render() {
    return (
      <Fragment>
        {this.state.loading && <Loader />}
        {this.state.loading || (
          <ul className="list-group">{this.state.videoItems}</ul>
        )}
      </Fragment>
    );
  }
}

export default ListCourseItems;

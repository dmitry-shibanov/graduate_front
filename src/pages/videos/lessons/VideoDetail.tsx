import React, { Component, Fragment } from "react";
import IHistory from "../../../models/props/IHistory";

class VideoDetail extends Component<any> {

  constructor(props:any){
    super(props);
    console.log(this.props);

  }
  render() {
    let url = `http://localhost:3100/video/${this.props.history.location.pathname.replace('/videos/')}`;
    return (
      <Fragment>
        <div className="video-detail col-md-7">
            <div className="embed-responsive embed-responsive-16by9">
            <video id="videoPlayer" controls>
          <source src={url} type="video/mp4" />
        </video>
            </div>

        </div>
      </Fragment>
    );
  }
}


export default VideoDetail;



{/* <div className="video-detail col-md-8">
<div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url}></iframe>
</div>
 <div className="details">
    <div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
</div> 
</div> */}




{/* <div className="details">
<div>{video.snippet.title}</div>
<div>{video.snippet.description}</div>
</div>  */}
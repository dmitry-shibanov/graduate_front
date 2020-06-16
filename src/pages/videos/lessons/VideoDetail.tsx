import React, { Component, Fragment } from "react";

class VideoDetail extends Component<{video: string}> {
  render() {
    const video = this.props.video;
    // const videoId = video.id.videoId;
    const url = `http://localhost:3100/assets/video/http-03-sending-a-post-request.mp4`;
    return (
      <Fragment>
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
            <video id="videoPlayer" controls>
          <source src="http://localhost:3100/video" type="video/mp4" />
        </video>
            </div>
            <div className="details">
                {/* <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div> */}
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
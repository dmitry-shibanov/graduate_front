import React, { Component, Fragment } from 'react';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class ClassRoom extends Component {
    
    state = { 
        videos: [],
        selectedVideo: 'http-03-sending-a-post-request'
    };

    render(){
        return(
            <Fragment>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={(userSelected: any) => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
            </Fragment>
        );
    }
}

export default ClassRoom;
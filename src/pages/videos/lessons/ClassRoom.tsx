import React, { Component, Fragment } from 'react';
import axios from "../../../axios";
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Loader from '../../../components/loader/Loader';

class ClassRoom extends Component<any, any> {
    
    constructor(props: any){
        super(props);
    }
    state = { 
        videos: [],
        selectedVideo: '',
        loading: true
    };

    async componentDidMount(){
        console.log(`pops ${this.props.token}`);

        const videos = await axios.get("/courses/1", {
            headers: {
                Authorization: 'Bearer ' + this.props.token
              },
        });
        this.setState({
            videos: videos.data.videos,
            selectedVideo: videos.data.videos[0].id,
            loading: false
        })

        console.log(this.state);
    }

    onVideoSelect = (userSelected: any) => {
        console.log('called')
        this.setState({selectedVideo: userSelected});
        console.log(this.state);
    }

    render(){
        return(
            <Fragment>
                          {this.state.loading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Loader />
            </div>
          )}
          {this.state.loading || (
              <div className="container-fluid">
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos} />
          </div>
          )}
                      </Fragment>

        );
    }
}

export default ClassRoom;
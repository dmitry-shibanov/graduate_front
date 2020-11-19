import React, { FC } from 'react';
import VideoListItem from './VideoListItem';

const VideoList: FC<{videos: any, onVideoSelect:any}> = (props) => {
    const videoItems = props.videos.map((video: any) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.id} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
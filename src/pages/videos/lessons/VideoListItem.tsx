import React, { FC } from 'react';

const VideoListItem :FC<{video: any, onUserSelected: any}> = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    // const imageUrl = video.snippet.thumbnails.default.url;
    const elements = video.url.split('/');
    const title = elements[elements.length -1];
    return (
    <li onClick={() => onUserSelected(video.id)} className="list-group-item">
        <div className="video-list media">
            {/* <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div> */}
            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;
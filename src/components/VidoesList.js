import React from 'react';
import VideoItem from './VideoItem';

const VideosList = props => {

    const renderList = props.videos.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />
    })


    return(
        // console.log(props.videos)
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideosList;
import React from 'react';
import VideoItem from './VideoItem';

const VideosList = props => {

    const renderList = props.videos.map((video) => {
        console.log(video.id.videoID)
        return <VideoItem 
                key={video.id.videoId}
                onVideoSelect={props.onVideoSelect} 
                video={video} />
    })


    return(
        // console.log(props.videos)
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideosList;
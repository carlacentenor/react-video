import React from 'react'
import './videoplayerlayout.css'

const VideoPlayerLayout = (props) =>{
return (
    <div className="videoplayerlayout">
        {props.children}
    </div>
)

}

export default VideoPlayerLayout
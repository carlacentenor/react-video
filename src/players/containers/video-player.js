import React,{Component} from 'react'
import VideoPlayerLayout from '../component/videoplayer-layout'
class Player extends Component {
    render(){
        return(
            <VideoPlayerLayout>
                <video src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"  controls/>

            </VideoPlayerLayout>

        )

    }
}

export default Player
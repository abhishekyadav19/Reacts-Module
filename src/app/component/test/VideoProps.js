
import React from 'react';
import './MediaStyle.css';
import ReactPlayer from "react-player"

const VideoProps = (props) => {
    return (
        <>
            <div className='player-wrapper'>
                <ReactPlayer
                    controls
                    className='react-player'
                    url={props.url}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        },
                        facebook: {
                            appId: ''
                        }
                    }}
                    width={props.customPlayerSize.width}
                    height={props.customPlayerSize.height}
                />
            </div>
        </>
    )
}
export default VideoProps
VideoProps.defaultProps = {
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    customPlayerSize: {
        width: '100%',
        height: "80%"
    }
}






































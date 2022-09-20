import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import './MediaStyle.css';
import ReactPlayer from 'react-player';



const VideoInput = ({ width, height }) => {
    const [source, setSource] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
    const inputRef = useRef();

    const onChangeHandler = (e) => {
        const file = e.target.files[0];
        console.log(file)

        const url = URL.createObjectURL(file);
        setSource(url)
    }
    const handleClick = () => {
        inputRef.current.click();
    }

    return (
        <div className='video_input_container'>
            <input
                ref={inputRef}
                type="file"
                className='video_input_field'
                accept='.mov,.mp4,.avi,.wmv'
                onChange={onChangeHandler}

            />
            {
                !source && <div style={{ textAlign: "center" }}>
                    <Button style={{ backgroundColor: '#d9d9d9', color: "black" }} onClick={handleClick} variant="contained">Close</Button><br />
                    <h5>Nothing Selected</h5>
                </div>
            }
            {
                source && (
                    <div className="video_wrapper">
                        <ReactPlayer
                            className='video_input_video'
                            width='100%'
                            height="100%"
                            controls
                            url={source}
                            type="video/wmv"
                        />
                    </div>
                )
            }

        </div>
    )
}

export default VideoInput
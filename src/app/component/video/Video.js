import { Card, CardContent } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ReactPlayer from 'react-player'
import './video.css'
import video from '../../../assests/videos/drop.avi'
const url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"

const Video = () => {
    return (
        <>
            <Container max-width="md" >
                <Card>
                    <CardContent>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className="react-player" 
                                url={url}
                                width='100%'
                                height='100%'
                                controls
                            />
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Video
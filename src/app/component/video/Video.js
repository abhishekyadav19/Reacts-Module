import { Card, CardContent } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Video = () => {
    return (
        <>
            <Container max-width="md" >
                <Card>
                    <CardContent>
                        <video width="320" height="240" controls>
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>

                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Video
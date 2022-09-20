import { Card, CardContent, Container } from '@mui/material';
import VideoInput from './VideoInput';
import "./MediaStyle.css"

const VideoPlayer = () => {
  return (
    <Container max-width="xl">
        <Card className='card_bx'>
          <CardContent>
            < VideoInput  />
          </CardContent>
        </Card>
    </Container>
  )
}

export default VideoPlayer

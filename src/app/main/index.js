import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import VideoPlayer from '../component/test/VideoPlayer';
import { fetchDataApi } from '../store/actions';

const Main = () => {
  // const dispatch=useDispatch()

  //   useEffect(() => {
  //     dispatch(fetchDataApi())
  //   }, [])

  // const {loading,error,getGalleryData}=useSelector(state=>state.galleryReducer);
  // console.log(getGalleryData,"test");

  // if (error) {
  //   return <div>Error! {error.message}</div>;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>

      {/* {
        getGalleryData.map((item, i)=>{
          return(
            <>
            <h4>Homepage</h4>
            <h4>{item.title}</h4>
            </>
          )
        })
        } */}


      <Box
        sx={{
          display: 'flex',
          // height: '50vh',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ display: "flex", flexWrap: "wrap" }}>
          <Link to="/checkboxes"><Button>Checkbox</Button></Link>
          <Link to="/video"><Button>Video Player</Button></Link>
          <Link to="/tabs">  <Button>Tabs</Button></Link>
          <Link to="/react-datepicker"> <Button>React Datepicker</Button></Link>
          <Link to="/loader"> <Button>Loader</Button></Link>
          <Link to="/google-map"> <Button>Google Map</Button></Link>
          <Link to="/use-callbackhook" variant="secondary"> <Button>Use CallBack</Button></Link>
          <Link to="/use-memo" variant="secondary"> <Button>Use Memo</Button></Link>
          <Link to="/autocomplete" variant="secondary"> <Button>Autocomplete</Button></Link>
          <Link to="/image-preview" variant="secondary"> <Button>Image Preview</Button></Link>
        </ButtonGroup>
        {/* <VideoPlayer /> */}
      </Box>
    </>
  )
}

export default (Main)
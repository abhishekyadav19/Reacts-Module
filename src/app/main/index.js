import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { fetchDataApi } from '../store/actions';

const Main = () => {
const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchDataApi())
  }, [])

  const {loading,error,getGalleryData}=useSelector(state=>state.galleryReducer);
  // console.log(getGalleryData,"test");

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    
        {
        getGalleryData.map((item, i)=>{
          return(
            <>
            <h4>Homepage</h4>
            <h4>{item.title}</h4>
            </>
          )
        })
        }
      
    </div>
  )
}

export default (Main)
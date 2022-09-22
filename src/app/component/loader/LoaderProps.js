import React from 'react'
import Loader from './Loader'

const LoaderProps = () => {
  const images = {
    image1: "https://picsum.photos/200",
    image2: "https://loremflickr.com/320/240",
  }

  return (
    <>
      <Loader image={images.image1} />
    </>
  )
}

export default LoaderProps
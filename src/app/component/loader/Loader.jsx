import React from 'react'
import ImgIcon from '../../../assests/images/ao.svg'
import CustomImageLoader from "react-custom-image-loader."

const Loader = ({ image }) => {
    return (
        <>
            <CustomImageLoader
                image={image}
                isLoaded={true}
                circle={false}
                speed={2}
                animationType={'spin'}
            />
        </>
    )
}
export default Loader

Loader.defaultProps = {
    image:"https://loremflickr.com/320/240",
};
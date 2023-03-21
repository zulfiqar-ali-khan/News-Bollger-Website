import React from 'react'
import { Image } from 'react-bootstrap'
const ImageConponent = ({ image, width, height }) => {
    return (
        <Image src={image} widht={width} height={height} alt="" />
    )
}

export default ImageConponent
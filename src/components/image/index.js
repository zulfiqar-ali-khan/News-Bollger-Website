import React from 'react'
import { Image } from 'react-bootstrap'
const ImageConponent = ({ image, width, height, ...rest }) => {
    return (
        <Image src={image} widht={width} height={height} {...rest} alt="" />
    )
}

export default ImageConponent
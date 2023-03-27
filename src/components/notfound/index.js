import React from 'react'
import { NoDataFound } from '../../constants'
import ImageConponent from '../image'
const NoData = () => {
    return (
        <div className='notFound'>
            <ImageConponent image={NoDataFound} width={200} height={200} />
            <h5>No Data Found</h5>
        </div>
    )
}

export default NoData
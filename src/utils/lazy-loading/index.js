import React, { memo, lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'


const lazyLoad = (DynamicImportedComponent) => {


    const LazyComponent = lazy(DynamicImportedComponent)

    // eslint-disable-next-line react/display-name
    return memo(props => (
        <Suspense fallback={<Spinner animation="border" />}>
            <LazyComponent {...props} />
        </Suspense>
    ))
}

export default lazyLoad

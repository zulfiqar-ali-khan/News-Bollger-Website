import React, { memo, lazy, Suspense } from 'react'

const lazyLoad = (DynamicImportedComponent) => {


    const LazyComponent = lazy(DynamicImportedComponent)

    // eslint-disable-next-line react/display-name
    return memo(props => (
        <Suspense fallback={"loading--"}>
            <LazyComponent {...props} />
        </Suspense>
    ))
}

export default lazyLoad

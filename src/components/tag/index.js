import React from 'react'

const Tags = ({ setType }) => {
    return (

        <div className="fh5co_tags_all">
            <a className="fh5co_tagg" onClick={() => setType('Business')}>Business</a>
            <a className="fh5co_tagg" onClick={() => setType('Technology')}>Technology</a>
            <a className="fh5co_tagg" onClick={() => setType('Sport')}>Sport</a>
            <a className="fh5co_tagg" onClick={() => setType('Art')}>Art</a>
            <a className="fh5co_tagg" onClick={() => setType('Lifestyle')}>Lifestyle</a>
            <a className="fh5co_tagg" onClick={() => setType('Three')}>Three</a>
            <a className="fh5co_tagg" onClick={() => setType('Photography')}>Photography</a>
            <a className="fh5co_tagg" onClick={() => setType('Lifestyle')}>Lifestyle</a>
            <a className="fh5co_tagg" onClick={() => setType('Education')}>Education</a>
            <a className="fh5co_tagg" onClick={() => setType('Social')}>Social</a>
        </div>

    )
}

export default Tags
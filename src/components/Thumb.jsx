import React, { Component, PropTypes } from 'react'

const style = {
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const Thumb = ({ dataURI, meta, onView }) => {
    let { name, size, timestamp } = meta

    let ext = dataURI.substring(dataURI.indexOf('/') + 1, dataURI.indexOf(';'))
    if(ext === 'jpeg'){
        ext = 'jpg'
    }
    return (
        <div className="thumb" onTouchTap={ onView }>
            <img src={ dataURI }/>
        </div>
    )
    
}

Thumb.propTypes = {
    dataURI: PropTypes.string.isRequired,
    meta: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    }),

    onView: PropTypes.func.isRequired
}

export default Thumb
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import DownloadButton from './DownloadButton.jsx'

class Thumb extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let src = this.props.src
        let { name, size, timestamp } = this.props.meta
        let ext = src.substring(src.indexOf('/') + 1, src.indexOf(';'))
        if(ext === 'jpeg'){
            ext = 'jpg'
        }
        return (
            <div className="thumb">
                <p className="meta">
                    <span>{ name }</span>
                    <span>{ size }</span>
                    <span>{ timestamp }</span>
                </p>
                <DownloadButton src={ src } name={ name } ext={ ext }/>
                <img ref="img" src={ src }/>
            </div>
        )
    }
}

Thumb.propTypes = {
    src: PropTypes.string.isRequired, //dataURI
    meta: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    })
}

export default Thumb
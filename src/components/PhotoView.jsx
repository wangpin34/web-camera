import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class PhotoView extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let { photo: { dataURI, meta: { name, size, timestamp } }, onNext, onPre, onClose, download } = this.props
        return (
            <div className="photo-view">
                <span className="icon close" onClick={onClose}>X</span>
                <span className="icon previous" onClick={onPre}>&lt;</span>
                <img className="photo" src={ dataURI }/>
                <span className="icon next" onClick={onNext}>&gt;</span>
            </div>
        )
    }
}

PhotoView.propTypes = {
    photo: PropTypes.shape({
        dataURI: PropTypes.string.isRequired,
        meta: PropTypes.shape({
            name: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        }).isRequired
    }),
    onNext: PropTypes.func.isRequired,
    onPre: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default PhotoView

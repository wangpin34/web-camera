import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import FontIcon from 'material-ui/FontIcon'

class PhotoView extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let { photo: { dataURI, meta: { name, size, timestamp } }, onNext, onPre, onClose, download } = this.props
        return (
            <div className="photo-view">
                <div className="view-box">
                    <span className="material-icons close" onClick={onClose}>close</span>
                    <span className="material-icons previous" onClick={onPre}>previous</span>
                    <img className="photo" src={ dataURI }/>
                    <span className="material-icons next" onClick={onNext}>right_arrow</span>
                </div>
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

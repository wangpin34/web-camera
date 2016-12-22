import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class PhotoView extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if(this.props.photo){
            let { photo: {dataURI, meta: { name, size, timestamp } }, next, pre, end, download } = this.props
            return (
                <div className="photo-view">
                    <div className="mask"></div>
                    <div className="photo">
                        <img src={ dataURI }/>
                    </div>
                </div>
            )
        }else{
            return  <div className="photo-view">
                    <div className="mask"></div>
                    <div className="photo">
                        <img src={ dataURI }/>
                    </div>
                </div>
        }
        
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
    next: PropTypes.func.isRequired,
    pre: PropTypes.func.isRequired,
    end: PropTypes.func.isRequired,
    download: PropTypes.func.isRequired
}


export default PhotoView
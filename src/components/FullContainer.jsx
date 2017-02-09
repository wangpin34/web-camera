import React, { Component, PropTypes } from 'react'
import PhotoView from './PhotoView.jsx'

class FullContainer extends Component {

    render() {
        let { showPhoto, photo, next, pre, end } = this.props

        if(showPhoto) {
            return <PhotoView photo={photo} onNext={next} onPre={pre} onClose={end}></PhotoView>
        }else{
            return <div name="placeholder"></div>
        }
    }
}

FullContainer.propTypes = {
    showPhoto: PropTypes.bool.isRequired,
    photo: PropTypes.object,
    next: PropTypes.func.isRequired,
    pre: PropTypes.func.isRequired,
    end: PropTypes.func.isRequired
}

export default FullContainer

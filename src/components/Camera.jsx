import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import SnapButton from './SnapButton.jsx'
import Photos from './Photos.jsx'

class Camera extends Component {

    constructor(props) {
        super(props)

        this.state = { thums: [] }

        this.handleSnap = this.handleSnap.bind(this)
    }

    componentDidMount() {
        let constaints = { video: true, audio: false }
        let video = findDOMNode(this.refs.video)
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)

        navigator.getUserMedia(constaints, (stream) => {
            window.stream = stream;
            if(window.URL){
                video.src = window.URL.createObjectURL(stream);
            }else{
                video.srcObject = stream;
            }
        }, (err) => {
            alert(err)
        })
    }

    handleSnap() {
        let video = findDOMNode(this.refs.video)
        let drawmap = findDOMNode(this.refs.drawmap)
        drawmap.width = video.clientWidth
        drawmap.height = video.clientHeight
        drawmap.getContext('2d').drawImage(video, 0, 0, video.clientWidth, video.clientHeight)
        let dataURI = drawmap.toDataURL('image/jpeg')
        let timestamp = (new Date()).toGMTString()
        let name = timestamp
        let size = 10
        this.setState((preState) => {
            return preState.thums.push({
                src: dataURI,
                meta: {
                    name,
                    size,
                    timestamp
                }
            })
        })
    }

    render() {
        
        return (
            <div className="camera-box">
                <video ref="video" autoPlay></video>
                <canvas id="drawmap" ref="drawmap"></canvas>
                <SnapButton onSnap={ this.handleSnap }/>
                <Photos thums={ this.state.thums }/>
            </div>
        )
    }

}

export default Camera
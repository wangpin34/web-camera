import React, { Component, PropTypes } from 'react'
import Camera from '../Containers/Camera'
import AppBar from './CameraAppBar.jsx'
import PhotoBox from '../containers/PhotoBox'
import ThumbBox from '../containers/ThumbBox'

const App = ({isPhotoMode}) => (

	<div>
        <AppBar />
		<Camera />
        // { isPhotoMode? <PhotoBox />: null }
        <PhotoBox />
        <ThumbBox/>
	</div>
)

App.propTypes = {
    isPhotoMode: PropTypes.bool.isRequired
}

export default App
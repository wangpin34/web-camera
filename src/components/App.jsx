import React, { Component, PropTypes } from 'react'
import AppBar from './CameraAppBar.jsx'
import Camera from '../containers/Camera'
import GreatPhoto from '../containers/GreatPhoto'
import ThumbBox from '../containers/ThumbBox'

const App = () => (

	<div>
		<Camera />
        <GreatPhoto />
        <ThumbBox />
	</div>
)

export default App

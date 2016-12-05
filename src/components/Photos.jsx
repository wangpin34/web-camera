import React, { Component, PropTypes } from 'react'
import Photo from './Photo.jsx'

class Photos extends Component {

    constructor(props){
        super(props)
    }

    render() {
       return (
            <ul className="photos">
                {this.props.thums.map((thum) => {
                    return <li key={Math.random()}><Photo src={thum.src} meta={thum.meta}/></li>
                })}
            </ul>
       ) 
    }
}

Photos.propTypes = {
    thums: PropTypes.array.isRequired
}


export default Photos
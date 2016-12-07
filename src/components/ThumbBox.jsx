import React, { Component, PropTypes } from 'react'
import Thumb from './Thumb.jsx'

class ThumbBox extends Component {

    constructor(props){
        super(props)
    }

    render() {
       let thumbs = [].concat(this.props.thumbs).reverse()
       return (
            <ul className="thumbbox">
                {thumbs.map((thumb) => {
                    return <li key={Math.random()}><Thumb src={thumb.src} meta={thumb.meta}/></li>
                })}
            </ul>
       ) 
    }
}

ThumbBox.propTypes = {
    thumbs: PropTypes.array.isRequired
}

export default ThumbBox
import React, { Component, PropTypes } from 'react'
import Thumb from './Thumb.jsx'

class ThumbBox extends Component {

    constructor(props){
        super(props)
    }

    render() {
       let { thumbs, startView } = this.props
       return (
            <ul className="thumbbox">
                {thumbs.map((thumb) => {
                    return <li key={Math.random()}><Thumb dataURI={thumb.dataURI} meta={thumb.meta} onView={ () => { startView(thumb) } }/></li>
                })}
            </ul>
       ) 
    }
}

ThumbBox.propTypes = {
    thumbs: PropTypes.arrayOf(PropTypes.shape({
      dataURI: PropTypes.string.isRequired,
      meta: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
      }).isRequired
    })),
    startView: PropTypes.func.isRequired
}

export default ThumbBox
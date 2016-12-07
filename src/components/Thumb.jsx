import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class Thumb extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let { name, size, timestamp } = this.props.meta
        return (
            <div className="thumb">
                <p className="meta">
                    <span>{ name }</span>
                    <span>{ size }</span>
                    <span>{ timestamp }</span>
                </p>
                <img ref="img" src={ this.props.src }/>
            </div>
        )
    }
}

Thumb.propTypes = {
    src: PropTypes.object.isRequired,
    meta: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    })
}

export default Thumb
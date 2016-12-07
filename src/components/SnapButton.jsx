import React, { Component, PropTypes } from 'react'

class SnapButton extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="snapButton">
                <span className="button" onClick={ this.props.onSnap }></span>
            </div>
        )
    }
}

SnapButton.propTypes = {
    onSnap: PropTypes.func.isRequire
}

export default SnapButton
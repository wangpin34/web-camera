import React, { Component, PropTypes } from 'react'

const ButtonBox = (props) => (
    <div className="buttons">
        {props.children}
    </div>
)

export default ButtonBox
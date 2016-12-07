import React, { Component, PropTypes } from 'react'

class DownloadButton extends Component {

    constructor(props){
        super(props)

        this.onDownload = this.onDownload.bind(this)
    }

    onDownload() {
        let { src, name, ext } = this.props
        let a = document.createElement('a')
        a.href = src
        a.download = name + '.' + ext
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    render() {
        return (
            <span className="button thumb-button" onClick={ this.onDownload }>Download</span>
        )
    }
}

DownloadButton.propTypes = {
    src: PropTypes.string.isRequire,
    name: PropTypes.string,
    ext: PropTypes.string
}

DownloadButton.defaultProps = {
    name: 'download',
    ext: 'png'
}

export default DownloadButton
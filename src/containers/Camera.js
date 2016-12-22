import { connect } from 'react-redux'
import { snap } from '../actions/camera'
import Camera from '../components/Camera.jsx'

const mapDispatchToProps = dispatch => {
    return {
        snap: (dataURI, meta) => {
            dispatch(snap(dataURI, meta))
        }
    }
}

export default connect(null, mapDispatchToProps)(Camera)
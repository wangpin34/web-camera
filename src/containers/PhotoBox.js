import { connect } from 'react-redux'
import PhotoView from '../components/PhotoView.jsx'
import { nextView, preView, endView, download } from '../actions/photo'

const mapStateToProps = state => {
    return {
        photo: state.photo.current
    }
}

const mapDispatchToProps = dispatch => {
    return {
        next: () => {
            dispatch(nextView)
        },

        pre: () => {
            dispatch(preView)
        },

        end: () => {
            dispatch(endView)
        },

        download: () => {
            dispatch(download())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoView)
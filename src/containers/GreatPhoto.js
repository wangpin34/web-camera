import { connect } from 'react-redux'
import FullContainer from '../components/FullContainer.jsx'
import { nextView, preView, endView } from '../actions/photo'

const mapStateToProps = state => {
    return {
        photo: state.photo.current,
        showPhoto: !!state.photo.current
    }
}

const mapDispatchToProps = dispatch => {
    return {
        next: () => {
            dispatch(nextView())
        },

        pre: () => {
            dispatch(preView())
        },

        end: () => {
            dispatch(endView)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullContainer)

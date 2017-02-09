import { connect } from 'react-redux'
import ThumbBox from '../components/ThumbBox.jsx'
import { startView } from '../actions/photo'

const mapStateToProps = state => {
    return {
        thumbs: state.thumbs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startView: thumb => {
            dispatch(startView(thumb))
        }
    }
}

const ThumbBoxContainer = connect(mapStateToProps, mapDispatchToProps)(ThumbBox)

export default ThumbBoxContainer

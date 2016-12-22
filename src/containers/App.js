import { connect } from 'react-redux'
import App from '../components/App.jsx'

const mapStateToProps = state => {
    return {
        isPhotoMode: state.photo.isPhotoMode
    }
}

export default connect(mapStateToProps, null)(App)
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducers from './reducers'
import App from './components/App'
//import style from './styles/index.scss'
require('./styles/index.scss')

injectTapEventPlugin()
document.body.setAttribute('oncontextmenu', 'return false')

let store = createStore(reducers,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
)

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'))

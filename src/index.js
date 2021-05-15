import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './CaseConverterComponent'
import {createStore} from 'redux'
import rootReducer from './CaseConverterComponent/reducers'
import {Provider} from 'react-redux'


// store will be created and state will be automatically availabe
// it needs the reducers as argument. So if more than one reducer is there then use the combineReducer method
const store = createStore(rootReducer)


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'))
import React from 'react'
import ReactDom from 'react-dom'
import Field from './field'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

const reducers = combineReducers({
    
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
            
    </Provider>
,document.getElementById('app'))
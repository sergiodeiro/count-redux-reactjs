import React from 'react'
import ReactDom from 'react-dom'
import Counter from './counter'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import countReducer from './reducers/countReducer'

const reducers = combineReducers({
    counter: countReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
            <Counter />
    </Provider>
,document.getElementById('app'))
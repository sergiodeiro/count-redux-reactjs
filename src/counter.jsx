import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc,dec,dois,stepChanged} from './action/countActions'

const Counter = (props) => {
    
    return(
        <div>
            <h1>{props.counter.number}</h1>
            <input  
                onChange={props.stepChanged}
                value={props.counter.step} type="number"
            />
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dois}>++</button>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        inc,
        dec,
        stepChanged,
        dois
    }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
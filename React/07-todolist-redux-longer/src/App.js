import React,{ Component,Fragment } from 'react'
import store from './store'
import axios from 'axios'
import AppUI from './AppUI.js'

import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitDataAction
} from './store/actionCreator.js'

class App extends Component{
		constructor(props){
	        super(props)
	        this.handleChange = this.handleChange.bind(this)
        	this.handleAdd=this.handleAdd.bind(this)
        	this.handleDel = this.handleDel.bind(this)
        	this.state = store.getState()
        	store.subscribe(() => { this.setState(store.getState()) })
	    }
	    componentDidMount(){
        	//发送ajax请求
	        axios.get('http://127.0.0.1:3000')
	        .then(result=>{
	            store.dispatch(getLoadInitDataAction(result.data))
	        })
	        .catch(err=>{
	            console.log(err)
	        })
	    }
	    handleAdd(){
	        store.dispatch(getAddItemAction())
	    }
	   	handleChange(ev){
        	const task = ev.target.value
	        store.dispatch(getChangeItemAction(task))
    	}
    	handleDel(index){
       	    store.dispatch(getDelItemAction(index))
	    }
	    render(){
    	return (
            <AppUI 
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )
 	}
}

export default App





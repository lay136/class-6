import React,{ Component,Fragment } from 'react'
// import Item from './Iteam.js'
import { Button,Input,Row,Col,List } from 'antd';
import store from './store'
import axios from 'axios'


import "./App.css"
// import 'antd/dist/antd.css'
import AppUI from './AppUI.js'



/*
import {
    CHANGE_ITEM,
    ADD_ITEM,
    DEL_ITEM
} from './store/actionType.js'
*/

import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitDataAction
} from './store/actionCreator.js'

class App extends Component{
		constructor(props){
	        super(props)
	        /*
	        this.state = {
	            list:["吃饭","睡觉","跑步","听音乐"],
	            task:''
	        }
	        */
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
	            // console.log(result)
	            store.dispatch(getLoadInitDataAction(result.data))
	        })
	        .catch(err=>{
	            console.log(err)
	        })
	       //store.dispatch(getLoadInitDataAction())
	    }
	    handleAdd(){
	        //数据驱动界面
	        /*this.setState((preState)=>({
	            list:[...preState.list,preState.task],
	            task:''
	        })) 
	        */
	        /*
	        //派发action
	        const action = {
	            type:ADD_ITEM
	        }
	        store.dispatch(action)
			*/
	        store.dispatch(getAddItemAction())
	    }
	   	handleChange(ev){
        	const task = ev.target.value
			/*
			const task = ev.target.value
		      	this.setState(()=>({
		         	task:task
		    }))
		    */
		    /*
		    //派发action
	        //action就是一个对象
	        const action = {
	            type: CHANGE_ITEM,
	            payload: task
	        }
	        store.dispatch(action)
	        */
	        store.dispatch(getChangeItemAction(task))

    	}
    	handleDel(index){
	        // console.log(index)
	        /*
	        const list = [...this.state.list]
	        list.splice(index,1)
	        this.setState(()=>({
            	list
        	}))
        	*/
        	/*
        	const action = {
	            type: DEL_ITEM,
	            payload: index        
	        }
       	    store.dispatch(action)
       	    */
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
	    	/*
	        return( 
		    <div className="App">
		            <Row>
		                <Col span={18}>
		                    <Input 
		                    	placeholder="请输入内容，提交新增，点击删除" 
		                        onChange={this.handleChange}
		                        value={this.state.task}
		                    />
		                </Col>
		                <Col span={6}>
		                    <Button 
		                        type="primary"
		                        onClick={this.handleAdd}
		                    >
		                        提交
		                    </Button>
		                </Col>
		            </Row>
		            <List
		              	style={{marginTop:10}}
		              	bordered
		              	dataSource={this.state.list}
		              	renderItem={(item,index) => (
		                	<List.Item
		                    	onClick={this.handleDel.bind(this,index)}
		                	>
		                   		{item}
		                	</List.Item>
		              )}
	            	/>
        	</div> 
    	) 
    	*/            
 	}
}

export default App





import React,{ Component,Fragment } from 'react'
import Item from './Iteam.js'
import "./App.css"

/*
this.state 存放组件内部数据,
this.props存放组件的外部数据,
render负责渲染页面
*/

class App extends Component{
		constructor(props){
	        super(props)
	        this.state = {
	            list:["吃饭","睡觉","跑步","听音乐"],
	            task:''
	        }
	    }
	    handleAdd(){
	        //数据驱动界面
	        this.setState((preState)=>({
	            list:[...preState.list,preState.task],
	            task:''
	        }))       
	    }
	   	handleChange(ev){
			const task = ev.target.value
		      	this.setState(()=>({
		         	task:task
		    }))
    	}
    	handleDel(index){
	        // console.log(index)
	        const list = [...this.state.list]
	        list.splice(index,1)
	        this.setState(()=>({
            	list
        	}))
	    }
	    getItems(){
	        return this.state.list.map((item,index)=>{
	          return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)}/>
	        })        
	    }
	    render(){
	        return( 
		        <div className='App'>
					<input placeholder="请输入内容，提交新增，点击删除" onChange={this.handleChange.bind(this)} value={this.state.task} />
	            	<button onClick={this.handleAdd.bind(this)}>提交</button>
		            <ul>
		                {
		                    this.getItems()
		                }
		            </ul>
		        </div> 
	        )             
	    }
}

export default App





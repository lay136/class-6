import React,{ Component,Fragment } from 'react'
import Item from './Iteam.js'


import "./App.css"

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
	        this.setState({
	            list:[...this.state.list,this.state.task],
	            task:''
	        })       
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
	        this.setState({
	            list
	        })
	    }
	    render(){
	        return( 
		        <div className='App'>
					<input placeholder="请输入内容，提交新增，点击删除" onChange={this.handleChange.bind(this)} value={this.state.task} />
	            	<button onClick={this.handleAdd.bind(this)}>提交</button>
		            <ul>
		                {
		                    this.state.list.map((item,index)=>{
		                        /*
		                        return(
		                            <li 
		                                key={index}
		                                onClick={this.handleDel.bind(this,index)}
		                            >
		                                {item}
		                            </li>
		                        )
		                        */
		                        //子组给父组件传递参数
                       			return <Item key={index} index={index} task={item} list={this.state.list} />
		                    })
		                }
		            </ul>
		        </div> 
	        )             
	    }
}

export default App





import React,{ Component,Fragment } from 'react'
import Item from './Iteam.js'

<<<<<<< HEAD

=======
>>>>>>> 9785c68bc67b6d34ff566f1062835c05d487720f
import "./App.css"

class App extends Component{
		constructor(props){
	        super(props)
	        this.state = {
	            list:["吃饭","睡觉","跑步","听音乐"],
	            task:''
	        }
	    }
<<<<<<< HEAD
	    handleAdd(){
	        //数据驱动界面
	        this.setState({
	            list:[...this.state.list,this.state.task],
	            task:''
	        })       
=======
	    static getDerivedStateFromProps(props, state){
	        //根据props来修改state
	        console.log('App getDerivedStateFromProps(props, state):',props, state)
	        //用返回的对象和当前的state合并
	        /*
	        return {
	            task:'hello'
	        }
	        */
	       return null
	    }
	    shouldComponentUpdate(nextProps, nextState){
	        //根据当前新的props或者新的state来决定到底需不需要更新DOM,提高效率,避免不必要的更新
	       console.log('App shouldComponentUpdate(nextProps, nextState):',nextProps, nextState) 
	       // return true
	       if(nextState.task == 'l'){
	        return false
	       }else{
	        return true
	       }
	    }  
	    getSnapshotBeforeUpdate(prevProps, prevState){
	        //保存真实DOM更新前的某些数据
	        console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
	        return 123
	    }
	    //真实的更新DOM
	    componentDidUpdate(prevProps, prevState,snapshot){
	        //获取真实DOM更新前的某些数据
	        console.log('App componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
	    }      
	    componentDidMount(){
	        //发送ajax请求  卸载
	        console.log('App componentDidMount');
	    }
	    handleAdd(){
	        //数据驱动界面
	        this.setState((preState)=>({
	            list:[...preState.list,preState.task],
	            task:''
	        }))       
>>>>>>> 9785c68bc67b6d34ff566f1062835c05d487720f
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
<<<<<<< HEAD
	        this.setState({
	            list
	        })
=======
	        this.setState(()=>({
            	list
        	}))
	    }
	    getItems(){
	        return this.state.list.map((item,index)=>{
	          return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
	        })        
>>>>>>> 9785c68bc67b6d34ff566f1062835c05d487720f
	    }
	    render(){
	        return( 
		        <div className='App'>
					<input placeholder="请输入内容，提交新增，点击删除" onChange={this.handleChange.bind(this)} value={this.state.task} />
	            	<button onClick={this.handleAdd.bind(this)}>提交</button>
		            <ul>
		                {
<<<<<<< HEAD
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
=======
		                    this.getItems()
>>>>>>> 9785c68bc67b6d34ff566f1062835c05d487720f
		                }
		            </ul>
		        </div> 
	        )             
	    }
}

export default App





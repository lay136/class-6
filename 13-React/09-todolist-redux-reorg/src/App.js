import React,{ Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Row, Col, List } from 'antd';
import "./App.css"


import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getRequestInitDataAction
} from './store/actionCreator.js'

class App extends Component{
        componentDidMount(){
            this.props.handleInit()
        }
	    /*
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
 	}*/
    render() {
        const { handleChange,task,handleAdd,handleDel,list } = this.props
        return (
            <div className="App">
            <Row>
                <Col span={18}>
                    <Input 
                        onChange={handleChange}
                        value={task}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        type="primary"
                        onClick={handleAdd}
                    >
                        Primary
                    </Button>
                </Col>
            </Row>
            <List
              style={{marginTop:10}}
              bordered
              dataSource={list}
              renderItem={(item,index) => (
                <List.Item
                    onClick={()=>{handleDel(index)}}
                >
                   {item}
                </List.Item>
              )}
            />  
        </div>
        )          
    }
}


///映射属性到组件
const mapStateToProps = (state)=>({
    task:state.task,
    list:state.list      
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleChange:(ev)=>{
        const task = ev.target.value
        dispatch(getChangeItemAction(task))
    },
    handleAdd:()=>{
        dispatch(getAddItemAction())
    },
    handleDel:(index)=>{
        dispatch(getDelItemAction(index))
    },
    handleInit:()=>{
        dispatch(getRequestInitDataAction())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

// export default App





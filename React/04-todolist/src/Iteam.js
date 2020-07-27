import React,{ Component } from 'react'

//子组给父组件传递参数
class Item extends Component{
			constructor(props){
			        super(props)
			    }
			render(){
	        return(
	            //<li onClick={this.handleDel.bind(this,this.props.index)}>{this.props.task}</li>
	            <li onClick={this.props.handleDel}>{this.props.task}</li>
	        )
	    }



}














export default Item

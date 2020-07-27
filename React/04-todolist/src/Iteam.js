import React,{ Component } from 'react'
import PropTypes from 'prop-types'



//子组给父组件传递参数
class Item extends Component{
			constructor(props){
			        super(props)
			    }
			render(){
		        const { handleDel,task } = this.props
		        return(
		            <li onClick={handleDel}>{task}</li>
		        )
		    }
		    
		    /*
			render(){
	        return(
	            //<li onClick={this.handleDel.bind(this,this.props.index)}>{this.props.task}</li>
	            <li onClick={this.props.handleDel}>{this.props.task}</li>
	        )
	    }*/



}














export default Item

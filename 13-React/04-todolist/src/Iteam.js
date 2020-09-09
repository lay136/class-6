<<<<<<< HEAD
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
=======
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
>>>>>>> 9785c68bc67b6d34ff566f1062835c05d487720f

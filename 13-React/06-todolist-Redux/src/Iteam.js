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

}

Item.propTypes = {
    handleDel:PropTypes.func,
    task:PropTypes.string.isRequired
}
Item.defaultProps = {
    task:'learn...'
}


export default Item



import React,{ Component,Fragment } from 'react'
import "./App.css"

class App extends Component{
	    /*
	    render(){
	        return <div>
	            <input />
	            <button>提交</button>
	        </div>
	    */
		/*
	        return <Fragment>
	            <input />
	            <button>提交</button>
	        </Fragment>
	    }
		*/

		/*
		<input onChange={
    		this.handleChange.bind(this)
    		} 
    		value={
    			this.state.task
    		} 
    	/>
    	<button onClick={
    		this.handleAdd.bind(this)
    		}>提交
    	</button>
		*/
	    render(){
	        return( 
	        <div className='App'>
            	
	            <input className="input"/>
	            <button className="btn">提交</button>
	            <ul>
	                <li>吃饭</li>
	                <li>睡觉</li>
	                <li>学习</li>
	            </ul>
	        </div> 
	        )             
	    }
	    
	    handleChange(ev){
	        /*
	        console.log(ev.target.value);
	        console.log(this.state);
	        this.state.task = ev.target.value
	        console.log(this.state);
	        */
	        /*
	        this.setState({
	            task:ev.target.value
	       	})
	       	*/
			const task = ev.target.value
		      	this.setState(()=>({
		         	task:task
		    }))
    	}

}

export default App





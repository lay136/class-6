
import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    // HashRouter as Router, 
    Route, 
    Link,
    Switch 
} from "react-router-dom"

import TodoList from './pages/todolist'

class Home extends Component{
    render(){
        return <h2>this is home page</h2>
    }
}
class User extends Component{
    render(){
        return <h2>this is user page,user id is {this.props.match.params.id}</h2>
    }
}
class Admin extends Component{
    render(){
        return (
            <Switch>////只能匹配之后的第一个，想要匹配第二个，需要用精确匹配
                <Route exact path="/admin" render={()=><h2>this is admin home page</h2>} />
                <Route path="/admin/profile" render={()=><h2>this is admin profile page</h2>} />
                <Route path="/admin/:id" render={(route)=>(<h2>this is admin info page, admin id is {route.match.params.id}</h2>)} />
            </Switch>
        )
    }
}
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin:false
        }
    }
    render() {
        const ProtectRoute = ({component:Component,...rest})=>{
            return <Route
                    {...rest} 
                    render={(props)=>{
                        return this.state.isLogin ? <Component {...props} /> : <h2>please use Admin login page</h2>
                    }}
                />
        }
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/todolist">TodoList</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/user/123">/user/123</Link></li>
                            <li><Link to="/admin">/admin</Link></li>
                            <li><Link to="/admin/123">/admin/123</Link></li>
                            <li><Link to="/admin/profile">/admin/profile</Link></li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route path="/about" render={()=><h2>this is about page</h2>} />
                    <Route path="/user/:id" component={User} />
                    <ProtectRoute path="/admin" component={Admin} />
                </div>
            </Router>
        )          
    }
}



export default App

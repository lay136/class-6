import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

//虚拟DOM测试
/*
function tick(){
    const elem = (
        <div >
            <h1 >北京时间：</h1>
            <p> 2020年7月25日 {new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(elem,document.getElementById('root'))
}
tick()
setInterval(tick,1000)*/




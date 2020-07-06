
/*
const t1 = setTimeout(()=>{
    console.log('execute t1...');
},200)
console.log(t1);
clearTimeout(t1)
console.log('after t1..');
*/


/*
//循环定时器
const t2 = setInterval(()=>{
    console.log('execute t2...');
},200)
// clearInterval(t2)//关闭循环定时器
console.log('after t2..');
*/

/*
const t3 = setTimeout(()=>{
    console.log('execute t3...')；
},0)
*/

/*
//立即执行定时器,但是也是异步任务也要等到同步之后才可以执行
process.nextTick(()=>{
    console.log('execute nextTick...');  
})
const t4 = setImmediate(()=>{
    console.log('execute t4...');
})

console.log('after t4..');
*/

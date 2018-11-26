
(function(){
    for(let i=0;i<10000;i++){}
})()
document.onreadystatechange=(e)=>{
    console.log('readystate',document.readyState)
    console.log(e)
    console.log(e.currentTarget)
}


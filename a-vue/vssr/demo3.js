
const Vue=require('vue')
const server=require('express')()
const renderer=require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const context = {
    title: 'hello',
    meta: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `
  }

server.get('*',(req,res)=>{
    const app=new Vue({
        data:{
            url:req.url
        },
        template:`<div>访问的URL：{{url}}</div>`
    })

    renderer.renderToString(app,context,(err,html)=>{
        if(err){
            res.status(500).end('Internal Server Error')
            return
        }
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8

        res.end(html)
    })
})

server.listen(8845,function(){
    console.log('HTTPS Server is running at: http://127.0.0.1:%s', 8845);
})
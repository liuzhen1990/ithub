//require是让一个模块（js文件）可以使用
const express=require('express');
const router=require('./router.js');
const app=express();
app.engine('html', require('express-art-template'))
// 路由里配置了
// app.get('/',function(req,res){
// res.send('收到')
// })
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//由于bootstrap中的css与juqery等众多库需要被外界访问，所以需要配置静态资源
app.use('/public',express.static('./public'))  //css样式
app.use('/node_modules',express.static('./node_modules'))
app.use(router)   //可以使用路由里的所有东西  ，拿到一个东西得利用  注意位置
//如果不使用，那么router只是拿到了router.js下的modele.exports，并没有实际应用
app.listen(8080,function(){
	console.log('success 8080')
})
// exports.showSign=function(req,res){
// res.send('我是登录页面')
// }
//引入数据库包
const mysql=require('mysql')
//引入事件包
const moment=require('moment')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'ithub'
});

exports.showSignin=function(req,res){
	res.render('signin.html')
}
exports.signin=function(req,res){
res.send('我是登录页面1')
}
exports.showSignup=function(req,res){
res.render('signup.html')
}
exports.signup=function(req,res){
	var body=req.body;
	//res.send('我是lll')  //点击登录按钮时，会在Network中输出我是111
	//1.获取表单提交的表单数据
	//const body=req.body;
	//2.数据验证
	// 普通校验 ，如数据有没有，格式正不正确
	//业务数据校验，如用户名是否被占用 ，这里校验邮箱和昵称是否被占用
	//校验邮箱是否被占用
	var sqlStr1='SELECT * FROM `users` WHERE `email` =?';
	connection.query(sqlStr1,[body.email],function(err,results){
		if(err){
			return res.send({
			code:500,
			message:err.message,	
			})
		}
		if(results[0]){
			return res.send({
				code:1,
				message:'邮箱已被占用'
			})		
		}
	
		//校验昵称是否已经被占用
		var sqlstr2='SELECT * FROM `users` WHERE `nickname`=?'
        connection.query(sqlstr2,[body.nickname],function(err,results){
        	if(err){
        		return res.send({
        		code:500,
        		message:err.message
        		})
        		
        	}
        	if(results[0]){
             return res.send({
             	code:2,
                message:'昵称已被占用' 
             })
             
        	}
   
   
	//3.注册
	//console.log(req.body)
	//body.createdAt="2017-03-10 10:10:10"
	//使用的moment插件
	body.createdAt=moment().format('YYYY-MM-DD, hh:mm:ss');
    const sqlStr='INSERT INTO `users` SET ?'
    connection.query(sqlStr,body,function(error,results){
    if(error){
        return res.send({
        	code:500,
        	message:error.message
        })
}
	res.send({
		code:200,
		message:'ok'
	})
})
        })
    })
}
exports.signout=function(req,res){
res.send('我是登出页面1');
}
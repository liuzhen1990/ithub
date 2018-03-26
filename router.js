const express=require('express');
const index=require('./controllers/index.js')
const user=require('./controllers/user.js')
const topic=require('./controllers/topic.js')
//router是一个对象，它里面有一些方法可以让我们调用
const router=express.Router()
// router.get('/',function(req,res){
// 	res.send('我是路由发送')
// })
//渲染首页
router.get('/',index.showIndex)
//在当前模块中导出，这样在别的模块中加载的时候才可以得到
//用户相关
router.get('/signin',user.showSignin)
router.post('/signin',user.signin)
router.get('/signup',user.showSignup)
router.post('/signup',user.signup)
router.post('/signout',user.signout)
//话题相关
// router.get('/topic/create',topic.showcreate)
// router.post('/topic/create',topic.create)
// router.get('/topic/:topicID',topic.show)
// router.get('/topic/:topicID/edit',topic.showEdit)
// router.post('/topic/:topicID/edit',topic.edit)
// router.post('/topic/:topicID/delete',topic.delete)
module.exports=router;

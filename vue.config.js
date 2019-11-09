const bodyparser = require('body-parser')
const list1 = require('./src/data/user.json')
const list2 = require('./src/data/list.json')
const fs = require('fs')

module.exports = {
    devServer: {
        open: true,
        // 登录数据
        before(app) {
            app.post('/login1', bodyparser.json(), (req, res) => {
                let { username, passwd } = req.body
                let obj = list1.find(item => item.name == username)
                if (!obj) {
                    res.send({ code: 0, msg: "用户不存在" })
                } else {
                    if (obj.pwd === passwd) {
                        res.send({ code: 1, msg: "登录成功", data: obj, token: new Date() * 1 })
                    } else {
                        res.send({ code: 0, msg: "登录失败" })
                    }
                }
            })
            // 列表数据
            app.get('/list', (req, res) => {
                res.send(list2)
            })
            // 注册
            app.post('/zhuce', bodyparser.json(), (req, res) => {
                let { username, passwd } = req.body
                let obj = {
                    "id": new Date() * 1,
                    "name": username,
                    "nick": "马云",
                    "pwd": passwd,
                    "avator": "mayun.png",
                    "age": 18
                }
                let index = list1.findIndex(item => item.name == username)
                console.log(index)
                if (index === -1) {
                    list1.push(obj)
                    fs.writeFileSync('./src/data/user.json', JSON.stringify(list1))
                    res.send({ code: 1, obj, msg: "注册成功", token: new Date() * 1 })
                } else {
                    res.send({ code: 0, msg: "用户已注册" })
                }
            })

            //收藏
            app.post('/shoucang', bodyparser.json(), (req, res) => {
                let { id } = req.body
                let obj = list2.find(item => item.publishID == id)
                obj.store = !obj.store
                res.send(list2)
            })
            //收藏页
            app.get('/scy',(req,res)=>{
                let scdata = list2.filter(item =>item.store)
                res.send(scdata)
            })
        }
    }
}
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
    console.log(req.body, req.query);
    res.json({
        data: true,
        succsess: true,
        msg: "登录成功"
    })
})

router.get('/login', (req, res, next) => {
    console.log(req.query);
    res.json({
        data: true,
        succsess: true,
        msg: "登录成功"
    })
})

router.get('/list', (req, res, next) => {
    res.json({
        data: ["张三", "李四"],
        succsess: true,
        msg: "登录成功"
    })
})

module.exports = router;

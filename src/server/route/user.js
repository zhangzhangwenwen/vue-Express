import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [
      {'name': '张文', 'sex': '男'},
      {'name': '孙鹏', 'sex': '女'}
  ]  
  res.send(data)
})

export default router

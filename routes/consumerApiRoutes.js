const router = require('express').Router()
const {
    signUp,
    signIn,
    getCourses,
    buyCourse,
} = require('../controllers/consumerApiController')

router.post('/consumer/signUp', signUp)
router.post('/consumer/signIn', signIn)
router.get('/getallCourses', getCourses)
router.post('/buyCourse/:courseId', buyCourse)

module.exports = router
const router = require('express').Router()
const { signUp, signIn, createCourse } = require('../controllers/uploaderApiController')

router.post('/uploader/signUp', signUp)
router.post('/uploader/signIn', signIn)
router.post('/createCourse', createCourse)

module.exports = router

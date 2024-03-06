import Router from 'koa-router'
import UserController from '../controller/userController.js'

const router = new Router()

router.get('/Case/GetCaseAll', UserController.getCaseAll)
router.get('/Case/GetCaseById/:pid', UserController.getCaseById)
router.get('/News/GetNews', UserController.getNews)
router.get('/News/GetNewsById/:pid', UserController.getNewsById)
router.get('/DataDictionary/GetDataDictionaryAll', UserController.getDataDictionaryAll)
router.get('/DataDictionary/GetDataDictionaryByKey', UserController.getDataDictionaryByKey)
router.get('/Honor/GetHonorAll', UserController.getHonorAll)
router.get('/Enterprise/GetEnterpriseAll', UserController.getEnterpriseAll)
router.get('/Team/GetTeamAll', UserController.getTeamAll)
router.get('/Course/GetCourseAll', UserController.getCourseAll)
router.post('/User/Login', UserController.onLogin)

export default router

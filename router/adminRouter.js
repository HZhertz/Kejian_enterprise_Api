import Router from 'koa-router'
import AdminController from '../controller/adminController.js'
import upload from '../middleware/upload.js'

const router = new Router({ prefix: '/Admin' })

router.post('/UpLoad/UploadImage', upload.single('image'), AdminController.uploadImage)
router.get('/User/GetUserAll', AdminController.getUserAll)
router.post('/User/CreateUser', AdminController.createUser)
router.put('/User/ModifiedUser', AdminController.modifiedUser)
router.delete('/User/DeleteUser', AdminController.deleteUser)
router.post('/News/CreateNews', AdminController.createNews)
router.put('/News/ModifiedNews', AdminController.modifiedNews)
router.delete('/News/DeleteNews', AdminController.deleteNews)
router.post('/Case/CreateCase', AdminController.createCase)
router.put('/Case/ModifiedCase', AdminController.modifiedCase)
router.delete('/Case/DeleteCase', AdminController.deleteCase)
router.post('/Team/CreateTeam', AdminController.createTeam)
router.put('/Team/ModifiedTeam', AdminController.modifiedTeam)
router.delete('/Team/DeleteTeam', AdminController.deleteTeam)
router.post('/Course/CreateCourse', AdminController.createCourse)
router.put('/Course/ModifiedCourse', AdminController.modifiedCourse)
router.delete('/Course/DeleteCourse', AdminController.deleteCourse)
router.post('/Enterprise/CreateEnterprise', AdminController.createEnterprise)
router.put('/Enterprise/ModifiedEnterprise', AdminController.modifiedEnterprise)
router.delete('/Enterprise/DeleteEnterprise', AdminController.deleteEnterprise)
router.post('/Honor/CreateHonor', AdminController.createHonor)
router.put('/Honor/ModifiedHonor', AdminController.modifiedHonor)
router.delete('/Honor/DeleteHonor', AdminController.deleteHonor)
router.post('/Dictionary/CreateDictionary', AdminController.createDictionary)
router.put('/Dictionary/ModifiedDictionary', AdminController.modifiedDictionary)
router.delete('/Dictionary/DeleteDictionary', AdminController.deleteDictionary)

export default router

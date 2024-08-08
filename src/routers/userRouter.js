import express, { Router } from 'express'
import userList from '../controllers/user/userList.js'
import userById from '../controllers/user/userById.js'
import addUser from '../controllers/user/addUser.js'
import updateUser from '../controllers/user/updateUser.js'
import editUser from '../controllers/user/editUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', userById)
router.get('/list', userList)
router.post('/', addUser)
router.put('/', updateUser)
router.patch('/', editUser)
router.delete('/', deleteUser)

export default router
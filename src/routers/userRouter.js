import express, { Router } from 'express'
import userList from '../controllers/user/userList.js'
import userById from '../controllers/user/userById.js'
import addUser from '../controllers/user/addUser.js'
import editNameUser from '../controllers/user/updateNameUser.js'
import editUser from '../controllers/user/editUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.post('/', addUser)
router.get('/list', userList)
router.get('/:id', userById)
router.patch('/:id', editNameUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router
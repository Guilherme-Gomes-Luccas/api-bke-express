import express from 'express'
import productList from '../controllers/product/productList.js'
import productById from '../controllers/product/productById.js'
import addProduct from '../controllers/product/addProduct.js'
import updateProduct from '../controllers/product/updateProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'

const router = express.Router()

router.get('/', productById)
router.get('/list', productList)
router.post('/', addProduct)
router.put('/', updateProduct)
router.patch('/', editProduct)
router.delete('/', deleteProduct)

export default router
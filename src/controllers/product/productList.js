import userModel from '../../models/productModel.js'

const productList = (req, res) => {
    const products = userModel.getAll()

    res.json(products)
}

export default productList
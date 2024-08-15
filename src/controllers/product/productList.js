import { getAll } from '../../models/productModel.js'

const productList = async (req, res) => {
    const product = await getAll()

    res.json(product)
}

export default productList
import { getById } from "../../models/productModel.js"

const productById = async (req, res) =>{
    const {id} = req.params

    const product = await getById(+id)

    if (product) {
        res.json({message: "Product get by id", product})
    } else {
        res.status(404).json({error: "Produto não encontrado"})
    }
}

export default productById
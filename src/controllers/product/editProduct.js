import { update } from "../../models/productModel.js"

const editProduct = async (req, res) =>{
    const {id} = req.params
    const product = req.body
    
    product.id = +id

    const result = await update(product)

    if (!result) {
        return res.status(401).json({
            error: "Erro ao criar produto"
        })
    }

    return res.json({
        success: "Produto atualizado com sucesso",
        product: result
    })
}

export default editProduct
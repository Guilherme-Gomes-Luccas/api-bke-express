import { update } from "../../models/productModel.js"

const updateProduct = async (req, res) =>{
    const {id} = req.params
    const { name } = req.body

    const product = { id: +id, name }

    const result = await update(product)

    if (!result) {
        return res.status(401).json({
            error: "Erro ao criar produto"
        })
    }

    return res.json({
        success: "Produto atualizado com sucesso",
        user: result
    })
}

export default updateProduct
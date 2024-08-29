import { create } from "../../models/productModel.js"

const addProduct = async (req, res) =>{
    const product = req.body

    const result = await create(product)

    if (!result) {
        return res.status(500).json({
            error: "Erro ao criar produto"
        })
    }

    return res.json({
        success: "Rota POST /user",
        user: result
    })
}

export default addProduct
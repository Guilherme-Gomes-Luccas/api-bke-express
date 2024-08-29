import { create } from "../../models/userModel.js";

const addUser = async (req, res) =>{
    const user = req.body

    const result = await create(user)

    if (!result) {
        return res.status(500).json({
            error: "Erro ao criar usuário"
        })
    }

    return res.json({
        success: "Rota POST /user",
        user: result
    })
}

export default addUser
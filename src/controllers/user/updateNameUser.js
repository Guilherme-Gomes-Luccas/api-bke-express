import { update } from "../../models/userModel.js"

const editNameUser = async (req, res) =>{
    const {id} = req.params
    const { name } = req.body

    try {
        const user = { id: +id, name }

        const result = await update(user)

        if (!result) {
            return res.status(401).json({
                error: "Erro ao criar usuário"
            })
        }

        return res.json({
            success: "Usuário atualizado com sucesso",
            user: result
        })
    } catch (error) {
        if (error?.code === 'P2025') {
            res.status(404).json({error: "Usuário não encontrado"})
        }

        next(error)
    }

    
}

export default editNameUser
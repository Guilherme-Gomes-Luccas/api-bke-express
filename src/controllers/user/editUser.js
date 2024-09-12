import { update } from "../../models/userModel.js"

const editUser = async (req, res, next) =>{
    const {id} = req.params
    const user = req.body

    try {
        user.id = +id

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

export default editUser
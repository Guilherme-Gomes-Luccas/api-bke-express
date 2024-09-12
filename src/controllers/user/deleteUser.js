import { remove } from "../../models/userModel.js"

const deleteUser = async (req, res) =>{
    const {id} = req.params

    try {
        const user = await remove(+id)

        return res.json({
            message: "User remove with success",
            user
        })
    } catch (error) {
        if (error?.code === 'P2025') {
            res.status(404).json({error: "Usuário não encontrado"})
        }

        res.status(500).json({error: "Erro no servidor"})
    }
}

export default deleteUser
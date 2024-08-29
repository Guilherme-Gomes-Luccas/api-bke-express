import { getById } from "../../models/userModel.js"

const userById = async (req, res) =>{

    const {id} = req.params

    const user = await getById(+id)

    if (user) {
        res.json({message: "User get by id", user})
    } else {
        res.status(404).json({error: "Usuário não encontrado"})
    }
}

export default userById
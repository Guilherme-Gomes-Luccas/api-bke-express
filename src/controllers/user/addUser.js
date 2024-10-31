import { create, validateUserToCreate } from "../../models/userModel.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

const addUser = async (req, res, next) =>{
    try {
        const user = req.body

        const userValidated = validateUserToCreate(user)
        console.log(userValidated)

        if (userValidated?.error) {
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: userValidated.error.flatten().fieldErrors
            })
        }

        userValidated.data.public_id = uuid()
        userValidated.data.pass = bcrypt.hashSync(userValidated.data.pass, 10)

        const result = await create(userValidated.data)

        if (!result) {
            return res.status(500).json({
                error: "Erro ao criar usuário"
            })
        }

        return res.json({
            success: "Rota POST /user",
            user: result
        })
    } catch (error) {
        if (error?.code == 'P2002') {
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados",
                fieldErrors: {"email": "Email ja cadastrado"}
            })
        }

        next(error)
    }
}

export default addUser
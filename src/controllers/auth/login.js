import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { getByEmail, validateUserToLogin} from "../../models/userModel.js"

const login = async (req, res) =>{
    const login = req.body
    const loginValidated = validateUserToLogin(login)

    if(loginValidated?.error){
        return res.status(400).json({
            error: "Erro ao logar, verifique os dados",
            fieldErrors: loginValidated.error.flatten().fieldErrors
        })
    }

    //Buscar user pelo email
    const user = await getByEmail(loginValidated.data.email)
    if (!user) {
        return res.status(400).json({
            error: "Email ou senha inválida! (email não encontrado)"
        })
    }

    //Comparar a senha enviada com o hash armazenado
    const passValid = bcrypt.compareSync(loginValidated.data.pass, user.pass)
    if (!passValid) {
        return res.status(400).json({
            error: "Email ou senha inválida! (senha inválida)"
        })
    }

    console.log(user);
    return res.json({user})

}

export default login
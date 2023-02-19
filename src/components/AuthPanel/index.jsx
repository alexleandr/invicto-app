import { AuthBox } from "./styles"
import icon from "../../assets/img/invicto-icon.png"
import { useParams } from "react-router-dom"
import LoginForm from "./LoginForm"

export default function AuthPanel() {
    const { idForm } = useParams()

    return (
        <AuthBox>
            <img src={icon} alt="Ícone do inVicto."/>
            <div>
                <a href="/auth/login">Acessar conta</a>
                <a href="/auth/cadastro">Criar conta</a>
            </div>
            <LoginForm/>
        </AuthBox>
    )
}
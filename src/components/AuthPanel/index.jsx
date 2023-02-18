import { AuthBox, SelectedForm } from "./styles"
import icon from "../../assets/img/invicto-icon.png"
import { useParams } from "react-router-dom"

export default function AuthPanel() {
    const { idForm } = useParams()

    return (
        <AuthBox>
            <img src={icon} alt="Ícone do inVicto."/>
            <div>
                <a href="/auth/login">Acessar conta</a>
                <a href="/auth/cadastro">Criar conta</a>
            </div>
        </AuthBox>
    )
}
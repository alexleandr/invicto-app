import { AuthBox } from "./styles"
import icon from "../../assets/img/invicto-icon.png"

export default function AuthPanel() {
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
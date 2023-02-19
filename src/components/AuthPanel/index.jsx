import { AuthBox } from "./styles"
import icon from "../../assets/img/invicto-icon.png"
import { Navigate, useParams } from "react-router-dom"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function AuthPanel() {
    const { idForm } = useParams()

    let form
    if (idForm === 'login') form = <LoginForm/>
    else if (idForm === 'cadastro') form = <RegisterForm/>
    else return <Navigate to="/auth/login"/>

    return (
        <AuthBox>
            <img src={icon} alt="Ícone do inVicto."/>
            <div>
                <a href="/auth/login">Acessar conta</a>
                <a href="/auth/cadastro">Criar conta</a>
            </div>
            {form}
        </AuthBox>
    )
}
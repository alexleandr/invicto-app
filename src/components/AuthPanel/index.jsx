import { AuthBox, SelectedItem } from "./styles"
import icon from "../../assets/img/invicto-icon.png"
import { Navigate, useParams } from "react-router-dom"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"

export function AuthPanel() {
    const { idForm } = useParams()

    let form
    if (idForm === 'login') form = <LoginForm />
    else if (idForm === 'cadastro') form = <RegisterForm />
    else return <Navigate to="/auth/login" />

    let navbar
    if (idForm === 'login') navbar = <div><SelectedItem href="/auth/login">Acessar conta</SelectedItem><a href="/auth/cadastro">Criar conta</a></div>
    else if (idForm === 'cadastro') navbar = <div><a href="/auth/login">Acessar conta</a><SelectedItem href="/auth/cadastro">Criar conta</SelectedItem></div>

    return (
        <AuthBox>
            <img src={icon} alt="Ícone do inVicto." />
            {navbar}
            {form}
        </AuthBox>
    )
}
import { AuthBox, Form } from "./styles"
import icon from "../../assets/img/invicto-icon.png"
import { useParams } from "react-router-dom"

function LoginForm() {
    return (
        <Form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password"/>

            <button type="submit">Entrar</button>
        </Form>
    )
}

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
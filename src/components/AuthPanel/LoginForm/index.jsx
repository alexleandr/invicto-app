import { LoginFormContainer } from "./styles"

export function LoginForm() {
    return (
        <LoginFormContainer>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />

            <button type="submit">Entrar</button>
        </LoginFormContainer>
    )
}
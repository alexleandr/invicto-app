import { SignInForm } from "./styles";

export default function LoginForm() {
    return (
        <SignInForm>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />

            <button type="submit">Entrar</button>
        </SignInForm>
    )
}
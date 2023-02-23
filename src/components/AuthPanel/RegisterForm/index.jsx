import { RegisterFormContainer } from "./styles"

export function RegisterForm() {
    return (
        <RegisterFormContainer>
            <label htmlFor="fullname">Nome Completo</label>
            <input type="text" id="fullname" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="birth-date">Data de Nascimento</label>
            <input type="date" id="birth-date" />

            <button type="submit">Criar conta</button>
        </RegisterFormContainer>
    )
}
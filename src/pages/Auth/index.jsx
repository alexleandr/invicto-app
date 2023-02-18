import { AuthContainer, MainContainer, WelcomeContainer } from "./styles"
import logo from "../../assets/img/invicto-logo.png"

export default function Auth() {
    return (
        <MainContainer>
            <WelcomeContainer>
                <img src={logo} alt="Logo do inVicto."/>
                <p>Bem-vindo ao <mark>inVicto!</mark> Aqui você encontrará recursos valiosos para ajudá-lo a superar seus vícios e levar uma vida mais saudável e equilibrada. Estamos aqui para apoiá-lo em sua jornada de recuperação.</p>
            </WelcomeContainer>
            <AuthContainer></AuthContainer>
        </MainContainer>
    )
}
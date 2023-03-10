import { RegisteredPanelContainer } from "./styles";

import icon from "../../assets/img/invicto-icon.png"

export function RegisteredPanel() {
    return (
        <RegisteredPanelContainer>
            <img src={icon} alt="Ícone do inVicto." />
            <p>Seja bem vindo!</p>
            <div>  
                <p>Sua senha de acesso foi enviada para o seu email:</p>
                <h6>emaildeteste@gmail.com</h6>
            </div>
        </RegisteredPanelContainer>
    )
}
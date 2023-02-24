import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { AuthPanelContainer, TabsContent, TabsList, TabsTrigger} from "./styles"

import icon from "../../assets/img/invicto-icon.png"

export function AuthPanel() {
    return (
        <AuthPanelContainer defaultValue="login">
            <img src={icon} alt="Ícone do inVicto." />

            <TabsList>
                <TabsTrigger value="login">
                    Acessar conta
                </TabsTrigger>
                <TabsTrigger value="register">
                    Criar conta
                </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </AuthPanelContainer>
    )
}
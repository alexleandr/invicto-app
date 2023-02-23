import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { AuthPanelContainer, TabsContent, TabsList, TabsRoot, TabsTrigger} from "./styles"

import icon from "../../assets/img/invicto-icon.png"

export function AuthPanel() {
    return (
        <AuthPanelContainer>
            <img src={icon} alt="Ícone do inVicto." />

            <TabsRoot defaultValue="tab1">
                <TabsList aria-label="Gerenciamento de contas">
                    <TabsTrigger value="tab1">
                        Acessar conta
                    </TabsTrigger>
                    <TabsTrigger value="tab2">
                        Criar conta
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="tab1">
                    <LoginForm />
                </TabsContent>
                <TabsContent value="tab2">
                    <RegisterForm />
                </TabsContent>
            </TabsRoot>
        </AuthPanelContainer>
    )
}
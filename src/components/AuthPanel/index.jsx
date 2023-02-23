import * as Tabs from "@radix-ui/react-tabs"

import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { AuthPanelContainer} from "./styles"

import icon from "../../assets/img/invicto-icon.png"

export function AuthPanel() {
    return (
        <AuthPanelContainer>
            <img src={icon} alt="Ícone do inVicto." />

            <Tabs.Root className="tabs-root" defaultValue="tab1">
                <Tabs.List className="tabs-list" aria-label="Gerenciamento de contas">
                    <Tabs.Trigger className="tabs-trigger" value="tab1">
                        Acessar conta
                    </Tabs.Trigger>
                    <Tabs.Trigger className="tabs-trigger" value="tab2">
                        Criar conta
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="tabs-content" value="tab1">
                    <LoginForm />
                </Tabs.Content>
                <Tabs.Content className="tabs-content" value="tab2">
                    <RegisterForm />
                </Tabs.Content>
            </Tabs.Root>
        </AuthPanelContainer>
    )
}
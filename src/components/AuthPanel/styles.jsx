import styled from "styled-components"
import * as Tabs from "@radix-ui/react-tabs"

export const AuthPanelContainer = styled(Tabs.Root)`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 40px;
        margin-bottom: 1rem;
    }
`

export const TabsList = styled(Tabs.List)`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const TabsTrigger = styled(Tabs.Trigger)`
    background-color: transparent;
    padding: 1rem 0;
    border: none;
    border-bottom: 2px solid #363739;
    color: #ffffff;
    
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    
    &:hover {
        border-bottom: 2px solid #ff4147;
        color: #ff4147;
                    
        cursor: pointer;
        transition: 0.7s;
    }

    &[data-state='active'] {
        border-bottom: 2px solid #ff4147;
        color: #ff4147;
    }

    &:focus {
        border-bottom: 2px solid #ff4147;
        color: #ff4147;
        outline: none;
    }
`

export const TabsContent = styled(Tabs.Content)`
    width: 100%;
    outline: none;
`
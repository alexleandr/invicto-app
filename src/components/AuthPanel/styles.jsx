import styled from "styled-components"

export const AuthPanelContainer = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    img {
        height: 40px;
    }

    .tabs-root {
        width: 100%;

        display: flex;
        flex-direction: column;

        .tabs-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .tabs-trigger {
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
            }
        }

        .tabs-content {
            outline: none;
        }
    }
`
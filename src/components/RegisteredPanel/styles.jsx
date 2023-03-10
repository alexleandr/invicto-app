import styled from 'styled-components'

export const RegisteredPanelContainer = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 40px;
        margin-bottom: 1rem;
    }

    p, h6 {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: #c1c1c1;
    }

    h6 {
        color: #ffffff;
    }

    div {
        margin-top: 1rem;
        text-align: center;
    }

    @media(max-width: 480px) {
        width: 85%;
    }
`
import styled from "styled-components"

import background from "../../assets/img/dempsey-and-firpo.png"

export const MainContainer = styled.main`
    background-color: #1e1e1e;
    height: 100vh;

	display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const WelcomeContainer = styled.section`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;

    img {
        width: 270px;
    }

    p {
        color: #ffffff;
        width: 85%;

        font-family: 'Raleway', sans-serif;
        font-size: 24px;
        font-weight: 400;
        text-align: center;

        mark {
            background-color: #ff4147;
            color: #ffffff;
            padding: 0px 2px;

            font-weight: 600;
        }
    }
`

export const AuthContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`
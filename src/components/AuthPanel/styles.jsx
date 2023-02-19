import styled from "styled-components";

export const AuthBox = styled.div`
    width: 55%;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    img {
        height: 40px;
    }


    div {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        a {
            padding: 1rem 0;
            border-bottom: 2px solid #363739;
            color: #ffffff;
    
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            text-align: center;
            text-decoration: none;

            &:hover {
                border-bottom: 2px solid #ff4147;
                color: #ff4147;
                transition: 0.5s;
            }
        }
    } 
`

export const Form = styled.form`
    width: 100%;
    padding-top: 1rem;
    color: #ffffff;

    font-family: 'Inter', sans-serif;
    font-size: 14px;

    display: flex;
    flex-direction: column;

    input {
        background-color: #121212;
        height: 2.5rem;
        margin: 0.5rem 0;
        border: none;
        border-radius: 5px;
    }

    button {
        background-color: #ff4147;
        width: 120px;
        height: 3rem;
        margin-top: 1rem;
        border: none;
        border-radius: 32px;
        color: #ffffff;

        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 500;

        align-self: center;
    }
`
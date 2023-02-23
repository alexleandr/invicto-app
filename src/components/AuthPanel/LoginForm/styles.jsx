import styled from "styled-components"

export const LoginFormContainer = styled.form`
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
        padding: 25px 15px;
        border: none;
        border-radius: 5px;

        font-family: 'Inter', sans-serif;
        color: #c1c1c1;

        &:focus {
            outline: 1px solid #ff4147;
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: #c1c1c1;
        font-family: 'Inter', sans-serif;
        transition: background-color 5000s ease-in-out 0s;
    }

    button {
        background-color: #ff4147;
        width: 120px;
        height: 3.5rem;
        margin-top: 2rem;
        border: none;
        border-radius: 32px;
        color: #ffffff;

        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 500;

        align-self: center;

        &:hover {
            cursor: pointer;
            background-color: #f75257;
            transition: 0.5s;
        }
    }
`   
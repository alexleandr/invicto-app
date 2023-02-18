import styled from "styled-components";

export const AuthBox = styled.div`
    width: 60%;

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
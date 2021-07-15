import styled, { createGlobalStyle } from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background: black;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        min-width: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0;
    }
`;

export const ContentWrapper = styled.div`
    height: 90%;
    min-height: 800px;
    width: 80%;
    max-width: 1200px;

    background: whitesmoke;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

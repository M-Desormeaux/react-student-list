import styled, { createGlobalStyle } from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background: #dfdfdf;
`;

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        min-width: 100%;
        min-height: 100vh;
        font-family: 'Raleway', sans-serif;
    }
`;

export const ContentWrapper = styled.div`
    height: 570px;
    width: 80%;
    max-width: 800px;

    border-radius: 8px;

    overflow-y: scroll;

    background: whitesmoke;
    filter: drop-shadow(0 2px 2px #999);

    ::-webkit-scrollbar {
        width: 0;
    }
`;

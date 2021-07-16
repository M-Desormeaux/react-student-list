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
    height: 600px;
    width: 80%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
    background: whitesmoke;

    overflow-y: scroll;

    filter: drop-shadow(0 2px 2px #999);

    ::-webkit-scrollbar {
        width: 0;
    }
`;

export const SearchInput = styled.input`
    width: 99%;

    padding: 0.75rem;

    outline: none;
    border: 0;
    border-bottom: 2px solid #dfdfdf;

    background: transparent;
    color: #555;

    font-size: 1.3rem;

    font-family: "Raleway", sans-serif;

    &:focus,
    &:active {
        border: 0;
        border-bottom: 2px solid #555;
        color: #555;
    }
`;

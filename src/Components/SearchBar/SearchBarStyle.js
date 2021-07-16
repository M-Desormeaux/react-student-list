import styled from "styled-components";

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

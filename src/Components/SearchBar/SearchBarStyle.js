import styled from "styled-components";

export const SearchInput = styled.input`
    width: 99%;

    padding: 0.8rem;

    outline: none;
    border: 0;
    border-bottom: 2px solid #dfdfdf;

    background: transparent;
    color: #555;

    font-size: 1.4rem;

    &:focus,
    &:active {
        border: 0;
        border-bottom: 2px solid #555;
        color: #555;
    }
`;

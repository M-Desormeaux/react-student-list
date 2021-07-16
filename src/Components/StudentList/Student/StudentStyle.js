import styled from "styled-components";
import { SearchInput } from "../../../AppStyle";

export const StudentContainer = styled.div`
    position: relative;

    width: 100%;

    display: flex;

    border-bottom: 2px solid #dfdfdf;
`;

export const StudentIconDiv = styled.div`
    padding: 1.4rem;
`;

export const StudentInfo = styled.div`
    padding: 0.8rem;
`;

export const StudentIcon = styled.img`
    width: 120px;
    height: 120px;

    border: 2px solid #dfdfdf;
    border-radius: 100%;
`;

export const StudentName = styled.div`
    color: black;
    font-size: 2rem;
    font-weight: bolder;
`;

export const StudentDetails = styled.div`
    padding: 1rem 0 0 1.5rem;
    font-size: 0.9rem;
`;

export const ExpandGradesButton = styled.button`
    position: absolute;

    border: 0;
    background: transparent;

    cursor: pointer;

    top: 1.5rem;
    right: 1.5rem;
`;

export const TagsDiv = styled.div`
    padding: 0;
`;

export const Tags = styled.div`
    margin: 0.5rem 0;
    display: flex;
`;

export const TagInput = styled(SearchInput)`
    width: 60%;
    font-size: 0.8rem;
    padding: 0.2rem;
`;

export const Tag = styled.div`
    margin: 0 0.15rem;
    padding: 0.55rem 0.5rem;
    background: #cfcfcf;
    border-radius: 4px;
    font-size: 0.8rem;
    width: fit-content;
`;

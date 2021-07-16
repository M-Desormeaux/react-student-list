import styled from "styled-components";

export const StudentContainer = styled.div`
    position: relative;

    width: 100%;

    display: flex;

    padding: 0.15rem 0.3rem;

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
`;

export const ExpandGradesButton = styled.button`
    position: absolute;

    border: 0;
    background: transparent;

    top: 1.5rem;
    right: 1rem;

    width: 40px;
    height: 40px;
`;
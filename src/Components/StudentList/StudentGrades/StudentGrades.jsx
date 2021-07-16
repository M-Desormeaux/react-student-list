import React from "react";
import styled from "styled-components";

const Container = styled.table`
    height: fit-content;
`;

export const StudentGrades = (props) => {
    let index = 0;
    const grades = props.grades.map((grade) => {
        index++;
        return (
            <tr key={`${props.id}_${index}`}>
                <td>Test {index}:</td>
                <td>{grade}%</td>
            </tr>
        );
    });

    return (
        <Container key={props.id}>
            <tbody>{grades}</tbody>
        </Container>
    );
};

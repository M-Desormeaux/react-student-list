import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { StudentGrades } from "../StudentGrades/StudentGrades";
import {
    StudentIcon,
    StudentIconDiv,
    StudentDetails,
    StudentName,
    StudentInfo,
    ExpandGradesButton,
    StudentContainer,
} from "./StudentStyle";

export const Student = (props) => {
    const [visibility, setVisibility] = useState(false);

    const student = props.student;

    expandGradesHandler = () => {
        setVisibility(!visibility);
    };

    const studentName =
        student.firstName.toUpperCase() + " " + student.lastName.toUpperCase();

    // map all the string values to numbers
    const studentGrades = student.grades.map((grade) => Number(grade));

    const studentGradeAverage =
        studentGrades.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / studentGrades.length;

    const svgIcon = visibility ? (
        <FontAwesomeIcon icon={faMinus} size="2x" />
    ) : (
        <FontAwesomeIcon icon={faPlus} size="2x" />
    );

    return (
        <StudentContainer key={student.id}>
            <StudentIconDiv>
                <StudentIcon src={student.pic} alt={studentName} />
            </StudentIconDiv>
            <StudentInfo>
                <StudentName>{studentName}</StudentName>
                <StudentDetails>
                    <p>Email: {student.email}</p>
                    <p>Company: {student.company}</p>
                    <p>Skill: {student.skill}</p>
                    <p>Average: {studentGradeAverage}%</p>
                    {visibility && (
                        <>
                            <br />
                            <StudentGrades
                                id={student.id}
                                grades={studentGrades}
                            />
                        </>
                    )}
                </StudentDetails>
            </StudentInfo>

            <ExpandGradesButton onClick={expandGradesHandler}>
                {svgIcon}
            </ExpandGradesButton>
        </StudentContainer>
    );
};

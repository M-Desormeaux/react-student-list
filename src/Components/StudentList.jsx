import React from "react";
import {
    Student,
    StudentIcon,
    StudentIconDiv,
    StudentDetails,
    StudentName,
    StudentInfo,
} from "./StudentListStyle";

export const StudentList = (props) => {
    const students = props.apiData.map((student) => {
        const studentName =
            student.firstName.toUpperCase() +
            " " +
            student.lastName.toUpperCase();

        // map all the string values to numbers
        const studentGrades = student.grades.map((grade) => Number(grade));

        const studentGradeAverage =
            studentGrades.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            ) / studentGrades.length;

        return (
            <Student key={student.id}>
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
                    </StudentDetails>
                </StudentInfo>
            </Student>
        );
    });

    return <div>{students}</div>;
};

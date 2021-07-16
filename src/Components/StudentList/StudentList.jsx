import React from "react";
import { Student } from "./Student/Student";

export const StudentList = (props) => {
    const students = props.apiData.map((student) => {
        return <Student key={student.id} student={student} />;
    });

    return <>{students}</>;
};

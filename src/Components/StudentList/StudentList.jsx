import React from "react";
import { Student } from "./Student/Student";

export const StudentList = (props) => {
    const students = props.apiData.map((student) => {
        const newTagHandler = (student) => {
            const capsulatedData = [student];
            props.newApiData(capsulatedData);
        };

        return (
            <Student
                key={student.id}
                student={student}
                onNewTag={newTagHandler}
            />
        );
    });

    return <>{students}</>;
};

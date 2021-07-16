import React from "react";
import { Student } from "./Student/Student";

export const StudentList = (props) => {
    const students = props.apiData.map((student) => {
        const newTagHandler = (student) => {
            // console.log(student);

            props.newApiData(student);
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

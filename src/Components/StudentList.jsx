import React from "react";

export const Api = (props) => {
    const students = props.apiData.map((student) => {
        const studentName = {};

        return (
            <div key={student.id}>
                <div>
                    <img src={student.pic} alt={studentName} />
                </div>
                <div></div>
                <div></div>
            </div>
        );
    });

    return <div>{students}</div>;
};

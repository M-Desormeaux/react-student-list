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
    TagInput,
    TagsDiv,
    Tags,
    Tag,
} from "./StudentStyle";

export const Student = (props) => {
    const [visibility, setVisibility] = useState(false);
    const [newTag, setNewTag] = useState("");
    const [tags, setTags] = useState([]);

    const student = props.student;

    expandGradesHandler = () => {
        setVisibility(!visibility);
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const studentName =
        student.firstName.toUpperCase() + " " + student.lastName.toUpperCase();

    // map all the string values to numbers
    const studentGrades = student.grades.map((grade) => Number(grade));

    const studentGradeAverage =
        studentGrades.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / studentGrades.length;

    const svgIcon = visibility ? (
        <FontAwesomeIcon icon={faMinus} size="2x" color="#aaa" />
    ) : (
        <FontAwesomeIcon icon={faPlus} size="2x" color="#aaa" />
    );

    const newTagHandler = (event) => {
        setNewTag(event.target.value);
    };

    const addTagHandler = (event) => {
        if (event.key === "Enter") {
            setTags([...tags, newTag]);
            setNewTag("");

            const newStudent = {
                ...student,
                tags: [...tags, newTag],
            };

            // console.log(newStudent);

            props.onNewTag(newStudent);
        }
    };

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
                    <TagsDiv>
                        <Tags>
                            {tags.map((tag) => (
                                <Tag
                                    key={`${student.id}_${getRandomInt(
                                        1,
                                        9999
                                    )}${new Date().getTime()}`}
                                >
                                    {tag}
                                </Tag>
                            ))}
                        </Tags>
                        <TagInput
                            type="text"
                            onChange={newTagHandler}
                            onKeyPress={addTagHandler}
                            value={newTag}
                            placeholder={"Add a tag"}
                        />
                    </TagsDiv>
                </StudentDetails>
            </StudentInfo>

            <ExpandGradesButton onClick={expandGradesHandler}>
                {svgIcon}
            </ExpandGradesButton>
        </StudentContainer>
    );
};

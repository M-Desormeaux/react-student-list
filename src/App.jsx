import React, { useEffect, useState } from "react";
import {
    AppWrapper,
    ContentWrapper,
    GlobalStyle,
    SearchInput,
} from "./AppStyle";
import { StudentList } from "./Components/StudentList/StudentList";

export const App = () => {
    const [apiData, setApiData] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchTag, setSearchTag] = useState("");

    // useEffect only runs when the component would mount or update.
    // this allows me to keep the api updated. Could definitely be done better.
    // not a hook I am too familiar with, but allows me to do this more effeciently
    useEffect(() => {
        getData();
    }, []);

    apiUrl = "https://api.hatchways.io/assessment/students";
    // use the ES7 example fetch method
    async function getData() {
        //await the response of the fetch call
        let response = await fetch(apiUrl);
        //proceed once the first promise is resolved.
        let data = await response.json();
        //proceed only when the second promise is resolved and make sure to only return the students array
        setApiData(
            data.students.map(
                (student) => (newArray = { ...student, tags: [] })
            )
        );
    }

    const setNameHandler = (event) => {
        setSearchName(event.target.value.toLowerCase());
    };

    const setTagHandler = (event) => {
        setSearchTag(event.target.value.toLowerCase());
    };

    const rebuildStudentsHandler = (studentArray) => {
        const newStudent = apiData.map(
            (student) =>
                studentArray.find((target) => target.id === student.id) ||
                student
        );

        setApiData(newStudent);
    };

    // ran into a filtering issue and could not resolve it with filter or find cleanly,
    // this method is not pretty but it is is legible and can be improved without breaking things
    const tagFilteredList = apiData.filter((student) => {
        if (searchTag == "") {
            return student;
        } else {
            for (let i = 0; i < student.tags.length; i++) {
                if (student.tags[i].includes(searchTag)) {
                    return student;
                }
            }
        }
    });

    const filteredList = tagFilteredList.filter((student) => {
        if (searchName == "") {
            return student;
        } else if (
            student.firstName.toLowerCase().includes(searchName) ||
            student.lastName.toLowerCase().includes(searchName)
        ) {
            return student;
        }
    });

    console.log(apiData);

    return (
        <AppWrapper>
            <GlobalStyle />
            <ContentWrapper>
                <SearchInput
                    type="text"
                    value={searchName}
                    placeholder={"Search by name"}
                    onChange={setNameHandler}
                />
                <SearchInput
                    type="text"
                    value={searchTag}
                    placeholder={"Search by tag"}
                    onChange={setTagHandler}
                />
                <StudentList
                    apiData={filteredList}
                    newApiData={rebuildStudentsHandler}
                />
            </ContentWrapper>
        </AppWrapper>
    );
};

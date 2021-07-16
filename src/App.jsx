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
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");

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
        setApiData(data.students);
    }

    const setNameHandler = (event) => {
        setName(event.target.value);
    };

    const setTagHandler = (event) => {
        setTag(event.target.value);
    };

    const rebuildStudentsHandler = (studentArray) => console.log(studentArray);

    const tagFilteredList = apiData.filter((student) => true);

    const filteredList = tagFilteredList.filter((student) => {
        if (name == "" && tag == "") {
            return student;
        } else if (
            student.firstName.toLowerCase().includes(name) ||
            student.lastName.toLowerCase().includes(name)
        ) {
            return student;
        }
    });

    console.log(name);
    console.log(tag);

    return (
        <AppWrapper>
            <GlobalStyle />
            <ContentWrapper>
                <SearchInput
                    type="text"
                    value={name}
                    placeholder={"Search by name"}
                    onChange={setNameHandler}
                />
                <SearchInput
                    type="text"
                    value={tag}
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

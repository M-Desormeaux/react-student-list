import React, { useEffect, useState } from "react";
import { AppWrapper, ContentWrapper, GlobalStyle } from "./AppStyle";
import { Api } from "./Components/StudentList";

export const App = () => {
    const [apiData, setApiData] = useState([]);

    // useEffect only runs when the component would mount or update.
    // this allows me to keep the api updated.Could definitely be done better.
    useEffect(() => {
        getData();
    }, []);

    console.log(apiData);

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

    return (
        <AppWrapper>
            <GlobalStyle />
            <ContentWrapper>
                <Api title="Here is the Data" apiData={apiData} />
            </ContentWrapper>
        </AppWrapper>
    );
};

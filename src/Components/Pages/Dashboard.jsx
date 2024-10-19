import { useEffect, useState } from "react";
import { GetLesson } from "../../apis/Lesson";
// import { set } from "mongoose";

const Dashboard = () => {

    const [lessons, setLessons] = useState([])

    useEffect(() => {
        GetAPILesson();
    }, [])

    console.log('====================================');
    console.log("lessons:", lessons);
    console.log('====================================');

    const GetAPILesson = async () => {
        try {
            const apiLesson = await GetLesson();
            // const getDataLesson = apiLesson?.data?.data || [];
            console.log("apiLesson", apiLesson);
            setLessons(apiLesson);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            Hello Dashboard

        </>
    )
}


export default Dashboard;
// import axios from "../../utils/axios-custom"
import axios from "axios";

export const GetLesson = () => {
    return axios.get('https://localhost:7222/api/Lesson');
}
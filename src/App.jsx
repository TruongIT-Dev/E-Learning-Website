import "./input.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About1 from "./Components/Routes/About1";
import Courses1 from "./Components/Routes/Courses1";
import Team1 from "./Components/Routes/Team1";
import Testimonial1 from "./Components/Routes/Testimonial1";
import Contact1 from "./Components/Routes/Contact1";
import ErrorPage from "./Components/Pages/ErrorPage";
import Sign from "./Components/Pages/Sign";
import SignUp from "./Components/Pages/Register";
import Javaprog from "./Components/Course/Javaprog";
import Dsa from "./Components/Course/Dsa";
import Mern from "./Components/Course/Mern";
import Fullstack from "./Components/Course/Fullstack";
import Programming from "./Components/Course/Programming";
import ShowBook from "./Components/Ebook/ShowBook";
import BotpressChatbot from "./Components/Ebook/BotpressChatbot";
import Reactjs from "./Components/Course/Reactjs";
import Express from "./Components/Course/Express";
import Nodejs from "./Components/Course/Nodejs";
import Mongodb from "./Components/Course/Mongodb";
import Mysql from "./Components/Course/Mysql";
import Javascript from "./Components/Course/Javascript";
import Html from "./Components/Course/Html";
import Css from "./Components/Course/Css";
import Advjava from "./Components/Course/Advjava";
import JavaQuiz from "./Components/Quiz/JavaQuiz";
import Test from "./Components/Pages/Test";
import FullstackQuiz from "./Components/Quiz/FullstackQuiz";
import JavascriptQuiz from "./Components/Quiz/JavascriptQuiz";
import ReactQuiz from "./Components/Quiz/ReactQuiz";
import Profile from "./Components/Pages/Profile";
// import Feedback from "./Components/Pages/Feedback";
import FeedbackAll from "./Components/Pages/FeedbackAll";
import UserManagement from "./Components/Pages/UserManagement";
import Admin from "./Components/Routes/private";
import Dashboard from "./Components/Pages/Dashboard";
import CouresManagement from "./Components/Pages/CourseManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/courses" element={<Courses1 />} />
        <Route path="/team" element={<Team1 />} />
        <Route path="/testimonial" element={<Testimonial1 />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/error" element={<ErrorPage />} />

        <Route path="/signin" element={<Sign />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/test" element={<Test />} />
        <Route path="/test/java" element={<JavaQuiz />} />
        <Route path="/test/fullstack" element={<FullstackQuiz />} />
        <Route path="/test/javascript" element={<JavascriptQuiz />} />
        <Route path="/test/react" element={<ReactQuiz />} />

        <Route path="/courses/java" element={<Javaprog />} />
        <Route path="/courses/dsa" element={<Dsa />} />

        <Route path="/courses/mern" element={<Mern />} />
        <Route path="/courses/mern/nodejs" element={<Nodejs />} />
        <Route path="/courses/mern/express" element={<Express />} />
        <Route path="/courses/mern/react" element={<Reactjs />} />
        <Route path="/courses/mern/mongodb" element={<Mongodb />} />

        <Route path="/courses/fullstack" element={<Fullstack />} />
        <Route path="/courses/fullstack/sql" element={<Mysql />} />
        <Route path="/courses/fullstack/nodejs" element={<Nodejs />} />
        <Route path="/courses/fullstack/express" element={<Express />} />
        <Route path="/courses/fullstack/react" element={<Reactjs />} />
        <Route path="/courses/fullstack/mongodb" element={<Mongodb />} />
        <Route
          path="/courses/fullstack/javascript"
          element={<Javascript />}
        />
        <Route path="/courses/fullstack/html" element={<Html />} />
        <Route path="/courses/fullstack/css" element={<Css />} />

        <Route path="/cources/programming" element={<Programming />} />
        <Route path="/cources/programming/java" element={<Javaprog />} />
        <Route path="/cources/programming/advJava" element={<Advjava />} />
        <Route
          path="/cources/programming/javascript"
          element={<Javascript />}
        />

        <Route path="/library" element={<ShowBook />} />
        {/* <Route path="/feedback/new" element={<Feedback />} /> */}
        <Route path="/feedback" element={<FeedbackAll />} />


        {/* Route Private ADMIN */}
        <Route path="/admin" element={<Admin />}>
          <Route index path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/course-management" element={<CouresManagement />} />

        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <BotpressChatbot />
    </>
  );
}

export default App;

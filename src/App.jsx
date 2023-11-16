import { BrowserRouter } from "react-router-dom";

import "./stylesheets/App.scss";

import RootLayout from "./layouts/RootLayout.jsx";
import CoursesLayout from "./layouts/CoursesLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Login from "./pages/Login.jsx";
import Course from "./pages/Course.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<CoursesLayout />}>
                        <Route index element={<Courses />} />
                        <Route path=":courseId" element={<Course />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

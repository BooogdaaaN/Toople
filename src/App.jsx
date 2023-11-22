import { BrowserRouter } from "react-router-dom";

import "./stylesheets/App.scss";

import RootLayout from "./layouts/RootLayout.jsx";
import CoursesLayout from "./layouts/CoursesLayout.jsx";
import ProfileLayout from "./layouts/CoursesLayout.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./pages/Course.jsx";
import Profile from "./pages/Profile.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<ProfileLayout />}>
                        <Route index element={<Profile />} />
                        {/* <Route path="edit" element={<EditProfile />} /> */}
                        {/* <Route path=":userId" element={<Doer />} /> */}
                    </Route>

                    <Route path="courses" element={<CoursesLayout />}>
                        <Route index element={<Courses />} />
                        <Route path=":courseId" element={<Course />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

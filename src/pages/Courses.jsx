import "../stylesheets/Courses.scss";
import CourseCard from "../components/CourseCard.jsx";
import InputField from "../components/UI/input_field/InputField.jsx";

import searchIcon from "../img/i/search.svg";
import { coursesData } from "../data.js";
import { Link } from "react-router-dom";
function Courses() {
    ///courses[GET]
    const data = {
        // getCourses
        coursesData: [
            {
                id: 1,
                name: "Администрироварие информационных сетей",
                teacherName: "Михайлова С. А.",
                numberOfCompletedWorks: 10,
            },
            {
                id: 2,
                name: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfCompletedWorks: 2,
            },
            {
                id: 3,
                name: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfCompletedWorks: 2,
            },
            {
                id: 4,
                name: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfCompletedWorks: 2,
            },
            {
                id: 5,
                name: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfCompletedWorks: 2,
            },
        ],
    };
    return (
        <div className="courses">
            <div className="inputContainer">
                <InputField
                    placeholder={"Поиск курса"}
                    icon={searchIcon}
                    id={"search"}
                />
            </div>
            <ul className="coursesList">
                {data.coursesData.map((courseData) => (
                    <li key={courseData.id}>
                        <Link
                            to={`/courses/${courseData.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <CourseCard
                                courseName={courseData.name}
                                teacherName={courseData.teacherName}
                                numberOfWorks={
                                    courseData.numberOfCompletedWorks
                                }
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Courses;

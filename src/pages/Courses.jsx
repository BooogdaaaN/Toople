import "../stylesheets/Courses.scss";
import CourseCard from "../components/CourseCard.jsx";
import InputField from "../components/UI/input_field/InputField.jsx";

import searchIcon from "../img/i/search.svg";

import { Link, useParams } from "react-router-dom";
function Courses() {
    let { courseId } = useParams();

    const data = {
        // getCourses
        coursesData: [
            {
                courseId: 1,
                courseName: "Администрироварие информационных сетей",
                teacherName: "Михайлова С. А.",
                numberOfWorks: 10,
            },
            {
                courseId: 2,
                courseName: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfWorks: 2,
            },
            {
                courseId: 3,
                courseName: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfWorks: 2,
            },
            {
                courseId: 4,
                courseName: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfWorks: 2,
            },
            {
                courseId: 5,
                courseName: "Базы данных",
                teacherName: "Наместников С. А.",
                numberOfWorks: 2,
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
            <div className="coursesList">
                {data.coursesData.map((courseData) => {
                    return (
                        <Link
                            to={`/courses/${courseData.courseId}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <CourseCard
                                courseName={courseData.courseName}
                                teacherName={courseData.teacherName}
                                numberOfWorks={courseData.numberOfWorks}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
export default Courses;

import "../stylesheets/Courses.scss";

import CourseCard from "../components/CourseCard.jsx";
import useSearchFilter from "../hooks/useSearchFilter.jsx";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Courses() {
    const [coursesData, setCoursesData] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);

    useEffect(() => {
        ///courses[GET]
        const data = {
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
            ],
        };
        setCoursesData(
            data.coursesData.map((course) => {
                course.searchBy = [course.name, course.teacherName];
                return course;
            })
        );
        setDisplayedCourses(data.coursesData);
    }, []);
    const [searchBar] = useSearchFilter(coursesData, setDisplayedCourses);
    return (
        <div className="courses">
            <div className="inputContainer">{searchBar}</div>
            <ul className="coursesList">
                {displayedCourses.map((courseData) => (
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

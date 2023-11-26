import "../stylesheets/Courses.scss";

import CourseCard from "../components/CourseCard.jsx";
import useSearchFilter from "../hooks/useSearchFilter.jsx";

import getCoursesData from "../api/getCourses.js";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Courses() {
    const [coursesData, setCoursesData] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await getCoursesData(
                "http://192.168.0.54:8000"
            );

            setCoursesData(
                fetchedData.coursesData.map((course) => {
                    course.searchBy = [course.name, course.teacherName];
                    return course;
                })
            );
            setDisplayedCourses(fetchedData.coursesData);
        }
        fetchData();
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

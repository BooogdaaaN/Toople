import "../stylesheets/Course.scss";

import { useParams } from "react-router-dom";

import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import DoerCard from "../components/DoerCard";
import CourseDropDownSkeleton from "../components/skeletons/courseDropdown";

import fetchCourse from "../api/fetchCourse";

import { useEffect, useState } from "react";
function Course() {
    const [courseData, setCourseData] = useState();
    let { courseId } = useParams();
    useEffect(() => {
        async function setData() {
            const data = await fetchCourse(courseId);
            setCourseData(data[0]);
        }
        setData();
    }, []);
    return (
        <div className="course">
            {courseData && (
                <>
                    <h1>{courseData.courseName}</h1>
                    <h2>{courseData.teacherName}</h2>
                    <ul>
                        {courseData.tasks.map((task, index) => (
                            <li key={task.id}>
                                <Dropdown
                                    name={task.name}
                                    numberOfElements={task.numberOfDoers}
                                    elements={task.doers.map((doer) => (
                                        <DoerCard doer={doer} />
                                    ))}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {!courseData && <CourseDropDownSkeleton />}
        </div>
    );
}
export default Course;

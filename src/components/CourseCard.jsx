import "../stylesheets/CourseCard.scss";

import IconCounter from "../components/UI/icon_counter/IconCounter.jsx";

import iconWorkCompleted from "../img/i/work_completed.svg";
function CourseCard({ courseName, teacherName, numberOfWorks }) {
    return (
        <div className="course-card">
            <div className="course-card__top">
                <div className="course-card__title">{courseName}</div>
            </div>
            <div className="course-card__bottom">
                <div className="course-card__teacher">{teacherName}</div>
                <IconCounter icon={iconWorkCompleted} number={numberOfWorks} />
            </div>
        </div>
    );
}
export default CourseCard;

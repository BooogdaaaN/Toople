import "../stylesheets/CourseCard.scss";

import IconCounter from "../components/UI/icon_counter/IconCounter.js";

import iconWorkCompleted from "../img/i/work_completed.svg";
function CourseCard() {
    const courseName = "Администрирование информационных систем";
    const teacherName = "Михайлова С. А.";

    return (
        <div className="course-card">
            <div className="course-card__top">
                <div className="course-card__title">{courseName}</div>
            </div>
            <div className="course-card__bottom">
                <div className="course-card__teacher">{teacherName}</div>
                <IconCounter icon={iconWorkCompleted} number={35} />
            </div>
        </div>
    );
}
export default CourseCard;

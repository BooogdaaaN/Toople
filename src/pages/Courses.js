import "../stylesheets/Courses.scss";
import CourseCard from "../components/CourseCard.js";
import InputField from "../components/UI/input_field/InputField.js";

import searchIcon from "../img/i/search.svg";
function Courses() {
    return (
        <div className="courses">
            <div className="containet">
                <InputField
                    placeholder={"Поиск курса"}
                    icon={searchIcon}
                    id={"search"}
                />
            </div>
            <CourseCard />
        </div>
    );
}
export default Courses;

import "../stylesheets/CreateAd.scss";
import SelectList from "../components/SelectList.jsx";
import ElementToSelect from "../components/ElementToSelect.jsx";
import { coursesData, tasksData } from "../data.js";
function CreateAd() {
    // getCourses
    const listCourseElements = coursesData.courses.map((course) => {
        return {
            elementToDislay: (
                <ElementToSelect
                    title={course.name}
                    subtitle={course.teacherName}
                />
            ),
            value: course.id,
        };
    });
    return (
        <div className="createAd">
            <h1>Разместить объявление</h1>
            <div className="createAd__form">
                <div className="createAd__courseForm">
                    <SelectList
                        title="Курс"
                        method={"post"}
                        action={""}
                        elements={listCourseElements}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateAd;

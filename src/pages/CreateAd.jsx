import "../stylesheets/CreateAd.scss";
import SelectList from "../components/SelectList.jsx";
import ElementToSelect from "../components/ElementToSelect.jsx";
import AddCourseForm from "../components/AddCourseForm.jsx";
import PopUp from "../components/UI/popUp/PopUp.jsx";
import { useEffect, useState } from "react";
import { coursesData, tasksData } from "../data.js";
function CreateAd() {
    const [isAddingCourse, setIsAddingCourse] = useState(false);
    const [listCourseElements, setListCourseElements] = useState([]);

    useEffect(() => {
        setListCourseElements(
            coursesData.courses.map((course) => ({
                elementToDislay: (
                    <ElementToSelect
                        title={course.name}
                        subtitle={course.teacherName}
                    />
                ),
                value: course.id,
                sortBy: course.name,
                searchBy: [course.name, course.teacherName],
            }))
        );
    }, []);

    function addNewCourse(newCourseName, newTeacherName) {
        setIsAddingCourse(false);
        setListCourseElements((prev) => [
            ...prev,
            {
                elementToDislay: (
                    <ElementToSelect
                        title={newCourseName}
                        subtitle={newTeacherName}
                    />
                ),
                value: "newId",
                sortBy: "newElement",
                searchBy: [newCourseName, newTeacherName],
            },
        ]);
    }
    return (
        <div className="createAd">
            <h1>Разместить объявление</h1>
            <div className="createAd__form">
                <div className="createAd__courseForm">
                    <SelectList
                        title="Курс"
                        elements={listCourseElements}
                        onAdd={() => setIsAddingCourse(true)}
                    />
                </div>
            </div>
            <PopUp
                isOpen={isAddingCourse}
                onClose={() => setIsAddingCourse(false)}
            >
                <AddCourseForm onSubmit={addNewCourse} />
            </PopUp>
        </div>
    );
}

export default CreateAd;

import "../stylesheets/CreateAd.scss";
import SelectList from "../components/SelectList.jsx";
import ElementToSelect from "../components/ElementToSelect.jsx";
import AddCourseForm from "../components/AddCourseForm.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
import PopUp from "../components/UI/popUp/PopUp.jsx";
import { useEffect, useState } from "react";
import { coursesData, tasksData } from "../data.js";
function CreateAd() {
    const [listCourseElements, setListCourseElements] = useState([]);
    const [listTaskElements, setListTaskElements] = useState([]);

    const [isAddingCourse, setIsAddingCourse] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState();
    const [selectedTask, setSelectedTask] = useState();

    console.log(selectedCourse, selectedTask);
    function handleSelectCourse(selected) {
        setSelectedCourse(selected);
        setSelectedTask(undefined);
    }
    function handleSelectTask(selected) {
        setSelectedTask(selected);
    }
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
        setListTaskElements(
            tasksData.tasks.map((task) => ({
                elementToDislay: <ElementToSelect title={task.name} />,
                value: task.id,
                sortBy: task.name,
                searchBy: [task.name],
                courseId: task.courseID,
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
                value: "newCourseId",
                sortBy: "newElement",
                searchBy: [newCourseName, newTeacherName],
            },
        ]);
    }

    function addNewtask(newTaskName) {
        setIsAddingTask(false);
        setListTaskElements((prev) => [
            ...prev,
            {
                elementToDislay: <ElementToSelect title={newTaskName} />,
                value: "newTaskId",
                sortBy: "newElement",
                searchBy: [newTaskName],
                courseId: selectedCourse,
            },
        ]);
    }
    return (
        <div className="createAd">
            <h1>Разместить объявление</h1>
            <div className="createAd__form">
                <div className="createAd__subForm">
                    <SelectList
                        name="courseList"
                        value={selectedCourse}
                        elements={listCourseElements}
                        onAdd={() => setIsAddingCourse(true)}
                        onSelect={handleSelectCourse}
                        title="Курс"
                        buttonTitle={"Добавить другой курс"}
                    />
                </div>
                {selectedCourse && (
                    <div className="createAd__subForm">
                        <SelectList
                            name="taskList"
                            value={selectedTask}
                            elements={listTaskElements.filter(
                                (task) => task.courseId === selectedCourse
                            )}
                            onAdd={() => setIsAddingTask(true)}
                            onSelect={handleSelectTask}
                            title="Задание"
                            buttonTitle={"Добавить другое задание"}
                        />
                    </div>
                )}
            </div>
            <PopUp
                isOpen={isAddingCourse}
                onClose={() => setIsAddingCourse(false)}
            >
                <AddCourseForm onSubmit={addNewCourse} />
            </PopUp>
            <PopUp isOpen={isAddingTask} onClose={() => setIsAddingTask(false)}>
                <AddTaskForm onSubmit={addNewtask} />
            </PopUp>
        </div>
    );
}

export default CreateAd;

import "../stylesheets/Profile.scss";
import user from "../img/i/user.svg";

import { coursesData, tasksData } from "../data.js";
import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import { useEffect, useState } from "react";
import ProfileCompletedElement from "../components/ProfileCompletedElement.jsx";

function Profile() {
    const data = {
        // getCourses
        profile: {
            name: "Богдан",
            surName: "Рассказов",
            contacts: [
                {
                    type: "e-mail",
                    value: "fakeemail@gmail.com",
                },
                {
                    type: "telegram",
                    value: "https://t.me/fakeTg",
                },
            ],
            completed: [
                {
                    courseID: 1,
                    tasks: [
                        { id: 12, timesCompleted: 5 },
                        { id: 13, timesCompleted: 4 },
                    ],
                },
                {
                    courseID: 2,
                    tasks: [{ id: 24, timesCompleted: 5 }],
                },
            ],
        },
    };
    const person = data.profile;
    const [completedCourses, setCompletedCourses] = useState([]);
    useEffect(() => {
        setCompletedCourses(
            person.completed.map((personCourse) => {
                //const course = getCourseByID(personsCourse.coursesID)
                const course = coursesData.courses[0];
                const completedTasks = personCourse.tasks.map((personTask) => {
                    // const task = getTaskById(personTask.id)
                    const task = tasksData.tasks[0];
                    return {
                        taskName: task.name,
                        timesCompleted: personTask.timesCompleted,
                    };
                });
                return {
                    courseName: course.name,
                    teacherName: course.teacherName,
                    tasks: completedTasks,
                };
            })
        );
    }, []);
    console.log(completedCourses);

    return (
        <div className="profile">
            <div className="profile__photo">
                <img src="" alt="" />
            </div>
            <div className="profile__info">
                <div className="profile__name">{`${person.surName} ${person.name}`}</div>
                <div className="profile__contacts">
                    {person.contacts.map((contact, index) => (
                        <div key={index} className={`profile__${contact.type}`}>
                            {`${contact.type}: `}
                            <span>{contact.value}</span>
                        </div>
                    ))}
                </div>
                <div className="profile__completedTasks">
                    <Dropdown
                        name={"Выполненные работы"}
                        numberOfElements={person.completed.length}
                        elements={completedCourses.map((course, index) => (
                            <ProfileCompletedElement {...course} />
                        ))}
                    />
                </div>
            </div>
        </div>
    );
}
export default Profile;

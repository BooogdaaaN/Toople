import "../stylesheets/Profile.scss";
import user from "../img/i/user.svg";

import { coursesData, tasksData } from "../data.js";
import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import { useEffect, useState } from "react";
import ProfileCompletedElement from "../components/ProfileCompletedElement.jsx";
import Margott from "../img/p/margott.jpg";

function Profile() {
    // profile/id[GET](user.id)
    const data = {
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
                courseName: "Администрирование информационных систем",
                teacherName: "Михайлова С.А",
                tasks: [
                    {
                        taskName:
                            "Практическое занятие 1.  длинное названиеболее длинное название",
                        timesCompleted: 5,
                    },
                    {
                        taskName: "Практическое занятие 2. ",
                        timesCompleted: 4,
                    },
                ],
            },
            {
                courseName: "Базы данных",
                teacherName: "Наметсников С.А",
                tasks: [
                    {
                        taskName: "Практическое занятие 1 БД",
                        timesCompleted: 5,
                    },
                ],
            },
        ],
        timesCompleted: 14,
    };
    useEffect(() => {
        // get req
    }, []);

    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={Margott} alt="ava" />
            </div>
            <div className="profile__info">
                <div className="profile__name">{`${data.surName} ${data.name}`}</div>
                <div className="profile__contacts">
                    {data.contacts.map((contact, index) => (
                        <div key={index} className={`profile__${contact.type}`}>
                            {`${contact.type}: `}
                            <span>{contact.value}</span>
                        </div>
                    ))}
                </div>
                <div className="profile__completedTasks">
                    <Dropdown
                        name={"Выполненные работы"}
                        numberOfElements={data.timesCompleted}
                        elements={data.completed.map((course) => (
                            <ProfileCompletedElement {...course} />
                        ))}
                    />
                </div>
            </div>
        </div>
    );
}
export default Profile;

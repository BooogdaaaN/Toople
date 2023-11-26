import "../stylesheets/Profile.scss";
import user from "../img/i/user.svg";

import { coursesData, tasksData } from "../data.js";
import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import { useEffect, useState } from "react";
import ProfileCompletedElement from "../components/ProfileCompletedElement.jsx";
import Margott from "../img/p/margott.jpg";
import { useParams } from "react-router-dom";
import editIcon from "../img/i/edit.svg";
import EditProfile from "../components/EditProfile.jsx";
function Profile() {
    let { profileId } = useParams();
    const isMe = profileId === "me";
    const [profileData, setProfileData] = useState();
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        const data = {
            name: "Богдан",
            surName: "Рассказов",
            contacts: {
                type: "telegram",
                value: "https://t.me/fakeTg",
            },
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
        setProfileData(data);
    }, []);

    function onSaveEditing(newData) {
        setProfileData(newData);
        setIsEditing(false);
        //post newProfileData
    }

    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={Margott} alt="ava" />
            </div>
            {!isEditing && profileData && (
                <div className="profile__info">
                    <div className="profile__name">{`${profileData.surName} ${profileData.name}`}</div>
                    {isMe && (
                        <button
                            className="profile__edit"
                            onClick={() => setIsEditing(true)}
                        >
                            <img src={editIcon} alt="edit"></img>
                            Редактировать профиль
                        </button>
                    )}
                    <div className="profile__contacts">
                        <div>
                            {`${profileData.contacts.type}: `}
                            <span>{profileData.contacts.value}</span>
                        </div>
                    </div>

                    <div className="profile__completedTasks">
                        <Dropdown
                            name={"Выполненные работы"}
                            numberOfElements={profileData.timesCompleted}
                            elements={profileData.completed.map((course) => (
                                <ProfileCompletedElement {...course} />
                            ))}
                        />
                    </div>
                </div>
            )}
            {isEditing && (
                <EditProfile
                    previuosData={profileData}
                    onSubmit={onSaveEditing}
                />
            )}
        </div>
    );
}
export default Profile;

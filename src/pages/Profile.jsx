import "../stylesheets/Profile.scss";

import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import ProfileCompletedElement from "../components/ProfileCompletedElement.jsx";
import Margott from "../img/p/margott.jpg";
import editIcon from "../img/i/edit.svg";
import EditProfile from "../components/EditProfile.jsx";

import fetchProfile from "../api/fetchProfile.js";
import ProfileSkeleton from "../components/skeletons/profile/index.jsx";

import editProfile from "../api/editProfile.js";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/index.js";
import useAuthToken from "../hooks/useAuthToken";
import { useCookies } from "react-cookie";

function Profile() {
    const [cookie] = useCookies(["user"]);
    const [authToken, setAuthToken, removeAuthToken] = useAuthToken();
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const setIsAuth = context.setIsAuth;
    let { profileId } = useParams();
    const isMe = profileId === "me";
    const [profileData, setProfileData] = useState();
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        async function setData() {
            console.log(cookie);
            const fetchedProfileData = await fetchProfile(profileId, authToken);
            setProfileData(fetchedProfileData[0]);
        }
        setData();
    }, []);

    function onSaveEditing(newData) {
        editProfile(newData, authToken);
        setIsEditing(false);
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
                        <>
                            <button
                                className="profile__edit"
                                onClick={() => setIsEditing(true)}
                            >
                                <img src={editIcon} alt="edit"></img>
                                Редактировать профиль
                            </button>
                            <button
                                className="profile__exit"
                                onClick={() => {
                                    setIsAuth(false);
                                    removeAuthToken();
                                    navigate("/login");
                                }}
                            >
                                Выйти
                            </button>
                        </>
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
            {!profileData && <ProfileSkeleton />}
        </div>
    );
}
export default Profile;

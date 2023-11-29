import "../stylesheets/EditProfile.scss";

import InputField from "./UI/input_field/InputField";
import BlueButton from "./UI/blue_button/BlueButton";
import { useState } from "react";
function EditProfile({ previuosData, onSubmit }) {
    const [data, setData] = useState(previuosData);
    function handleSubmit(e) {
        if (hasUndefinedFields(data) || hasUndefinedFields(data.contacts))
            return;
        onSubmit(data);
    }
    return (
        <div className="editProfile">
            <form>
                <InputField
                    placeholder={"Иван"}
                    label={{ text: "Имя", for: "name" }}
                    type={"text"}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                />
                <InputField
                    placeholder={"Иванов"}
                    label={{ text: "Фамилия", for: "surname" }}
                    type={"text"}
                    onChange={(e) =>
                        setData({ ...data, surName: e.target.value })
                    }
                    value={data.surName}
                />
                <div className="editProfile__contacts">
                    <InputField
                        placeholder={"telegram"}
                        label={{ text: "Способ связи", for: "typeOfContact" }}
                        type={"text"}
                        onChange={(e) =>
                            setData({
                                ...data,
                                contacts: {
                                    type: e.target.value,
                                    value: data.contacts.value,
                                },
                            })
                        }
                        value={data.contacts.type}
                    />
                    <InputField
                        placeholder={"t.me/myTg"}
                        label={{ text: "Контакт", for: "valueOfContact" }}
                        type={"text"}
                        onChange={(e) =>
                            setData({
                                ...data,
                                contacts: {
                                    type: data.contacts.type,
                                    value: e.target.value,
                                },
                            })
                        }
                        value={data.contacts.value}
                    />
                </div>
            </form>
            <BlueButton onClick={handleSubmit}>Сохранить</BlueButton>
        </div>
    );
}

export default EditProfile;
function hasUndefinedFields(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] === undefined || obj[key] === "") {
                return true;
            }
        }
    }
    return false;
}

import "../stylesheets/SetPrice.scss";

import InputField from "./UI/input_field/InputField";
import BlueButton from "../components/UI/blue_button/BlueButton.jsx";

import { useState } from "react";
function SetPrice({
    title,
    buttonTitle,
    settingCustomerPrice,
    settingDoerPrice,
    publish,
}) {
    const [customerVariantPrice, setCustomerVariantPrice] = useState();
    const [doerVariantPrice, setDoerVariantPrice] = useState();
    function handleSettingCustomerPrice(value) {
        settingCustomerPrice(value);
        setCustomerVariantPrice(value);
    }
    function handleSettingDoerPrice(value) {
        settingDoerPrice(value);
        setDoerVariantPrice(value);
    }

    function handlePublish() {
        if (!customerVariantPrice || !doerVariantPrice) {
            return;
        }
        publish();
    }
    return (
        <div className="setPrice">
            <div className="setPrice__title">{title}</div>
            <div className="setPrice__customerVariantPrice">
                <InputField
                    placeholder={"600"}
                    name="customerVariantPrice"
                    label={{
                        text: "Сделать вариант заказчика",
                        for: "customerVariantPrice",
                    }}
                    onChange={(e) => handleSettingCustomerPrice(e.target.value)}
                    type={"number"}
                />
            </div>
            <div className="setPrice__doerVariantPrice">
                <InputField
                    placeholder={"300"}
                    name="doerVariantPrice"
                    label={{
                        text: "Отправить свой вариант",
                        for: "doerVariantPrice",
                    }}
                    onChange={(e) => handleSettingDoerPrice(e.target.value)}
                    type={"number"}
                />
            </div>

            <div className="setPrice__addBtn">
                <BlueButton onClick={handlePublish}>{buttonTitle}</BlueButton>
            </div>
        </div>
    );
}

export default SetPrice;

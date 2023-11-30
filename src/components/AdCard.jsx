import "../stylesheets/AdCard.scss";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";
import iconTaskCompleted from "../img/i/taskCompleted.svg";

import useAuthPopUp from "../hooks/useAuthPopUp.jsx";
import markAsCompleted from "../api/markAsCompleted.js";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/index.js";
function DoerCard({ ad }) {
    const context = useContext(AuthContext);
    const authToken = context.authToken;
    const [isDisabled, setIsDisabled] = useState(ad.hasCompleted);
    const [setIsAuthPopUp, authPopUp] = useAuthPopUp();
    const [cookies] = useCookies(["user"]);
    function addToCompleted() {
        if (!authToken) {
            setIsAuthPopUp(true);
            return;
        }
        setIsDisabled(true);
        markAsCompleted(ad, cookies.AuthToken);
    }
    return (
        <>
            <div className="doer-card">
                <div className="doer-card__top">
                    <div className="doer-card__name">{ad.name}</div>
                    <div className="doer-card__favorites">
                        <button
                            onClick={addToCompleted}
                            disabled={isDisabled}
                            title="Похвалить за выполненную работу ><"
                        >
                            <IconTemplate
                                icon={iconTaskCompleted}
                                color={isDisabled ? "#8de1f9" : "#e8ebec"}
                            />
                        </button>
                    </div>
                </div>
                <div className="doer-card__middle">
                    <div>
                        <span>Отправит свой вариант:</span>
                        <span>{ad.doerVariantPrice}</span>
                    </div>
                    <div>
                        <span>Сделает ваш:</span>
                        <span>{ad.customerVariantPrice}</span>
                    </div>
                </div>
                <div className="doer-card__bottom">
                    <Link
                        className="doer-card__contact"
                        to={authToken ? `/profile/${ad.doerId}` : ""}
                        onClick={() => {
                            if (!authToken) {
                                setIsAuthPopUp(true);
                                return;
                            }
                        }}
                    >
                        Перейти
                    </Link>
                </div>
            </div>
            {authPopUp}
        </>
    );
}
export default DoerCard;

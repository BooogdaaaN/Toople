import "../stylesheets/DoerCard.scss";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";
import iconTaskCompleted from "../img/i/taskCompleted.svg";

import useAuthPopUp from "../hooks/useAuthPopUp.jsx";
import markAsCompleted from "../api/markAsCompleted.js";

import { AuthContext } from "../context/index.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";

function DoerCard({ doer }) {
    const context = useContext(AuthContext);
    const isAuth = context.isAuth;
    const [isDisabled, setIsDisabled] = useState(doer.hasCompleted);
    const [setIsAuthPopUp, authPopUp] = useAuthPopUp();
    const [cookies] = useCookies(["user"]);
    function addToCompleted() {
        if (!isAuth) {
            setIsAuthPopUp(true);
            return;
        }
        setIsDisabled(true);
        markAsCompleted(doer.id, cookies.AuthToken);
    }
    return (
        <>
            <div className="doer-card">
                <div className="doer-card__top">
                    <div className="doer-card__name">{doer.name}</div>
                    <div className="doer-card__favorites">
                        <button onClick={addToCompleted} disabled={isDisabled}>
                            <IconTemplate
                                icon={iconTaskCompleted}
                                color={isDisabled ? "#8de1f9" : "#e8ebec"}
                            />
                        </button>
                    </div>
                </div>
                <div className="doer-card__middle">
                    <div>
                        <span>Отправит вариант исполнителя:</span>
                        <span>{doer.doerVariantPrice}</span>
                    </div>
                    <div>
                        <span>Сделает ваш вариант:</span>
                        <span>{doer.customerVariantPrice}</span>
                    </div>
                </div>
                <div className="doer-card__bottom">
                    <Link
                        className="doer-card__contact"
                        to={isAuth ? `/profile/${doer.id}` : ""}
                        onClick={() => {
                            if (!isAuth) {
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

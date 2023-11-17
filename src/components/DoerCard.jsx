import "../stylesheets/DoerCard.scss";

import { Link } from "react-router-dom";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";

import iconBookmark from "../img/i/bookmark.svg";
function DoerCard({ doer }) {
    return (
        <div className="doer-card">
            <div className="doer-card__top">
                <div className="doer-card__name">{doer.name}</div>
                <div className="doer-card__favorites">
                    <button>
                        <IconTemplate icon={iconBookmark} />
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
                <Link className="doer-card__contact" to="/">
                    Перейти
                </Link>
            </div>
        </div>
    );
}
export default DoerCard;

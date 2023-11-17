import "../stylesheets/DoerCard.scss";

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
            <div className="doer-card__prices">
                <div className="doer-card__name">{doer.doerVariantPrice}</div>
                <div className="doer-card__name">
                    {doer.customerVariantPrice}
                </div>
                <div className="doer-card__favorites">
                    <button>
                        <IconTemplate icon={iconBookmark} />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DoerCard;

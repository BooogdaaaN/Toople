import "../stylesheets/Dropdown.scss";

import { useState } from "react";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";
import DoerCard from "../components/DoerCard.jsx";

import chevron from "../img/i/chevron.svg";
function Dropdown({ taskName, numberOfDoers, doers }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <div className="dropdown__chevron">
                    <img src={chevron} alt="chevron" />
                </div>
                <div>{taskName}</div>
                {!isOpen && (
                    <div className="dropdown__counter">
                        <IconTemplate number={numberOfDoers} />
                    </div>
                )}
            </button>

            {doers && (
                <div className="dropdown__doers-list">
                    <div
                        className="dropdown__wrapper"
                        style={{ minHeight: "0" }}
                    >
                        <ul>
                            {doers.map((doer) => (
                                <li key={doer.id}>
                                    <DoerCard doer={doer} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {!isOpen && <hr />}
        </div>
    );
}
export default Dropdown;

import { useEffect, useMemo, useState } from "react";
import "../stylesheets/SelectList.scss";
import InputField from "./UI/input_field/InputField";
import BlueButton from "../components/UI/blue_button/BlueButton.jsx";
function SelectList({ title, elements, onAdd }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [displayedElements, setDisplayedElements] = useState(elements);

    useEffect(() => {
        setDisplayedElements(() => {
            const sortedElements = [...elements].sort((a, b) => {
                if (a["sortBy"] === "newElement") return -1;
                return a["sortBy"]?.localeCompare(b["sortBy"]);
            });
            const filteredElements = sortedElements.filter((element) => {
                const searchInArray = (element) =>
                    element.toLowerCase().includes(searchQuery.toLowerCase());

                if (element.searchBy.some(searchInArray)) return true;
                return false;
            });
            return filteredElements;
        });
    }, [elements, searchQuery]);

    return (
        <div className="selectList">
            <div className="selectList__title">{title}</div>
            <div className="selectList__search">
                <InputField
                    placeholder={"Поиск"}
                    name="search"
                    id="search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <fieldset>
                {displayedElements.map((element, index) => (
                    <div key={index} className="selectList__element">
                        <input
                            type="radio"
                            id={index}
                            name="selectList"
                            value={element.value}
                        />
                        <label htmlFor={index}>{element.elementToDislay}</label>
                    </div>
                ))}
            </fieldset>

            <div className="selectList__addBtn">
                <BlueButton onClick={onAdd}>Добавить другой курс</BlueButton>
            </div>
        </div>
    );
}

export default SelectList;

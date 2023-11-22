import "../stylesheets/SelectList.scss";
import InputField from "./UI/input_field/InputField";
function SelectList({ title, method, action, elements }) {
    return (
        <div className="selectList">
            <div className="selectList__title">{title}</div>
            <div className="selectList__search">
                <InputField placeholder={"поиск"} name="search" id="search" />
            </div>

            <fieldset>
                {elements.map((element, index) => (
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
                <button>Добавить другой курс</button>
            </div>
        </div>
    );
}

export default SelectList;

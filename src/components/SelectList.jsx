// import "../stylesheets/CreateAd.scss";
import InputField from "./UI/input_field/InputField";
function SelectList({ title, method, action, elements }) {
    return (
        <div className="selectList">
            <div className="selectList__title">{title}</div>
            <InputField placeholder={"поиск"} name="search" id="search" />
            <form action={action} method={method}>
                <fieldset className="createAd__selectCourse">
                    {elements.map((element, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={index}
                                name="selectList"
                                value={element.value}
                            />
                            <label htmlFor={index}>
                                {element.elementToDislay}
                            </label>
                        </div>
                    ))}
                </fieldset>
            </form>
        </div>
    );
}

export default SelectList;

import classes from "./InputField.module.scss";

function InputField({ placeholder, label, id, type, name, icon }) {
    return (
        <div className={classes.inputField}>
            {label && <label for={label.for}>{label.text}</label>}
            <input
                id={label ? label.for : id}
                placeholder={placeholder}
                name={name}
                type={type}
            />
            {icon && (
                <div className={classes.icon}>
                    <img src={icon} alt="icon" />
                </div>
            )}
        </div>
    );
}
export default InputField;

import classes from "./Icon_template.module.scss";

function IconTemplate({ icon, number }) {
    return (
        <div className={classes.iconTemplate}>
            {icon && (
                <div className={`${classes.icon} ${classes.circle}`}>
                    <img src={icon} alt="icon" />
                </div>
            )}
            {number && (
                <div className={`${classes.circle} ${classes.counter}`}>
                    {number > 99 ? "99+" : number}
                </div>
            )}
        </div>
    );
}
export default IconTemplate;

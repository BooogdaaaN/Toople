import classes from "./Icon_counter.module.scss";

function IconCounter({ icon, number }) {
    return (
        <div className={classes.iconCounter}>
            <div className={`${classes.icon} ${classes.circle}`}>
                <img src={icon} alt="icon" />
            </div>
            <div className={`${classes.circle} ${classes.counter}`}>
                {number > 99 ? "99+" : number}
            </div>
        </div>
    );
}
export default IconCounter;

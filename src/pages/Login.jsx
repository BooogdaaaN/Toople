import "../stylesheets/Login.scss";
import { useState } from "react";

import InputField from "../components/UI/input_field/InputField.jsx";
function Login() {
    const [isSigning, setIsSigning] = useState(false);
    function logIn(e) {
        e.preventDefault();
    }
    return (
        <div className="login">
            <div className="login__title">
                Вход в <span>Toople</span>
            </div>

            <form onSubmit={logIn}>
                <div className="login__email">
                    <InputField
                        label={{ for: "email", text: "E-mail" }}
                        placeholder={"e-mail"}
                    />
                </div>

                <div className="login__password">
                    <InputField
                        label={{ for: "password", text: "Пароль" }}
                        placeholder={"password"}
                        type={"password"}
                    />
                </div>
                {isSigning && (
                    <InputField
                        label={{
                            for: "confirm_password",
                            text: "Подтвердите пароль",
                        }}
                        placeholder={"password"}
                        type={"password"}
                    />
                )}
                <input
                    type="submit"
                    value={isSigning ? "Зарегистрироваться" : "Войти"}
                />
            </form>
            <div className="login__or">или</div>
            <button
                className="login__signup"
                onClick={() => {
                    setIsSigning(!isSigning);
                }}
            >
                {isSigning ? "Войти" : "Зарегистрироваться"}
            </button>
        </div>
    );
}

export default Login;

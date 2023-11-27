const logIn = async (loginData, setToken, navigate, setCookie) => {
    try {
        const response = await fetch("http://192.168.0.54:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            const responseData = await response.json();
            setToken(responseData[0].token);
            setCookie("AuthToken", responseData[0].token);
            setCookie("id", responseData[0].id);
            navigate("/");
        } else {
            alert("Неверные почта или пароль");
            console.error("Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};
export default logIn;

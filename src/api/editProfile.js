const editProfile = async (loginData, setToken, navigate) => {
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
            navigate("/");
        } else {
            alert("Неверные почта или пароль");
            console.error("Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};
export default editProfile;

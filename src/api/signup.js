const signUp = async (signupdata, setToken, navigate, setAuthToken) => {
    try {
        const response = await fetch("http://192.168.0.54:8000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(signupdata),
        });

        if (response.ok) {
            const responseData = await response.json();
            setToken(responseData[0].token);
            setAuthToken(responseData[0].token);
            navigate("/");
        } else {
            console.error("SignUp failed");
        }
    } catch (error) {
        console.error("Error during signup:", error);
    }
};
export default signUp;

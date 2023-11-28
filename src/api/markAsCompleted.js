const markAsCompleted = async (doerId, authToken) => {
    try {
        const response = await fetch("http://192.168.0.54:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(doerId),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error("Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};
export default markAsCompleted;

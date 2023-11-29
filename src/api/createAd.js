import address from "./addres";
const createAd = async (data, authToken, navigate) => {
    try {
        const response = await fetch(address + "/createAd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            navigate("/courses");
        } else {
            alert("ошибка");
            console.error("creation failed");
        }
    } catch (error) {
        console.error("Error during creation:", error);
    }
};
export default createAd;

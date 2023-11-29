import address from "./addres";
const markAsCompleted = async (ad, authToken) => {
    try {
        const response = await fetch(address + "/markAsCompleted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(ad),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error("Marking failed");
        }
    } catch (error) {
        console.error("Error during marking:", error);
    }
};
export default markAsCompleted;

const createAd = async (createAdData, authToken, navigate) => {
    // const createAdData = {
    //     courseId: "1",
    //     taskId: 'new',
    //     cutomerVariantPrice: 800,
    //     doerVariantPrice: 400,
    // }
    try {
        const response = await fetch("http://192.168.0.54:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(createAdData),
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

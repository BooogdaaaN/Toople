async function fetchProfile(id, authToken) {
    const response = await fetch(
        `http://192.168.0.54:8000/profile/${id}`,
        // `https://65646c94ceac41c0761e28ba.mockapi.io/toople/course`
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json;",
            },
            credentials: "include",
        }
    );
    const data = await response.json();
    return data;
}
export default fetchProfile;

async function fetchCourses() {
    const response = await fetch(
        // "https://65646c94ceac41c0761e28ba.mockapi.io/toople/courses"
        "http://192.168.0.54:8000/courses",
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json;",
            },
        }
    );
    const data = await response.json();
    return data;
}
export default fetchCourses;

async function fetchCourse(id) {
    const response = await fetch(
        `http://192.168.0.54:8000/courses/${id}`
        // `https://65646c94ceac41c0761e28ba.mockapi.io/toople/course`
    );
    const data = await response.json();
    return data;
}
export default fetchCourse;

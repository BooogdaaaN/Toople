async function getCoursesData(link) {
    const response = await fetch(`${link}/courses`);
    const fetchedData = await response.json();
    console.log(fetchedData);
    return fetchedData;
}

export default getCoursesData;

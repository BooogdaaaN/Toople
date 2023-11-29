import address from "./addres";
async function fetchProfile(id, authToken) {
    const response = await fetch(address + `/profile/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;",
            Authorization: `Bearer ${authToken}`,
        },
    });
    const data = await response.json();
    return data;
}
export default fetchProfile;

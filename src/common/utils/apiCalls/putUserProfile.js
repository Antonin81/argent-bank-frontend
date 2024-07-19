import { apiUrl } from "./apiUrl";

export const putUserProfile = async (token, firstname, lastname) => {
    try {
        const response = await fetch(apiUrl + "/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                firstName: firstname,
                lastName: lastname,
            }),
        });
        const { body } = await response.json();
        return body;
    } catch (error) {
        throw error;
    }

}
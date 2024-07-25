export const getUserProfile = async (token) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        const { body } = await response.json();
        return { id: body.id, firstname: body.firstName, lastname: body.lastName };
    } catch (error) {
        throw error;
    }

}
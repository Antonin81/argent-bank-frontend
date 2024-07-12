export const getUserProfile = async (token) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        const profile = response.json().then(
            (body) => {
                return { id: body.body.id, firstname: body.body.firstName, lastname: body.body.lastName };
            }
        );
        return profile;
    } catch (error) {
        throw error;
    }

}
export const login = async (username, password) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        });
        const { body } = await response.json();
        return body.token;
    } catch (error) {
        throw error;
    }

}
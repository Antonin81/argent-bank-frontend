export const login = async (username, password) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        });
        const token = response.json().then(
            (body) => {
                return body.body.token;
            }
        );
        return token;
    } catch (error) {
        throw error;
    }

}
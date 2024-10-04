class AuthService {
    async loginUser(email: string, password: string): Promise<void> {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "An error occured during login.");
            }

            const { token } = result;
            localStorage.setItem("jwtToken", token);

        } catch (error) {
            console.error("Error during login: ", error);
            throw new Error("An error occured during login.");
        }
    }
}

export default new AuthService();
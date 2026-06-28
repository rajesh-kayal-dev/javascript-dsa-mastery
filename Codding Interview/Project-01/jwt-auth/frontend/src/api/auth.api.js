const baseURL = `http://localhost:5000/api/auth`;

export const Login = async (userData) => {
    const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    },
    )
    return response.json();
}

export const getProfile = async (token) => {
    const response = await fetch(`${baseURL}/profile`, {
        headers: {
            "x-auth-token": token
        },
    });

    return response.json()
}
import api from "@/lib/api";
import axios from "axios";

/**
 * GetCSRFCookie
 * Fetches the CSRF cookie from the server to ensure secure requests.
 * 
 * @return {Promise<void>} Resolves when the CSRF cookie is successfully fetched.
 */
export async function getCSRFCookie() {
    try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_CSRF_URL}`, {
            withCredentials: true,
        });
    } catch (error) {
        console.error("Error fetching CSRF cookie:", error);
        throw error;
    }
}

/**
 * GetUser
 * Fetches the authenticated user's details.
 * 
 * @returns {Promise<Object>} The authenticated user's details.
 */
export async function getUser()
{
    try {
        const response = await api.get("/auth/user");
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch user: " + response.data.message);
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}
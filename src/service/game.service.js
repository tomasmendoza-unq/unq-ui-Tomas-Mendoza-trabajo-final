import apiClient from "../config/api";

export const isWordValid = async (word) => {
    try {
        const response = await apiClient.get("/api/validate", {
            params: { word: word },
        });

        return response.data.exists;
    } catch {
        return false;
    }
};

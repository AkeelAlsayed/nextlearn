// lib/api.ts

const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchEditions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/edition`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch editions:', error);
        throw error;
    }
};

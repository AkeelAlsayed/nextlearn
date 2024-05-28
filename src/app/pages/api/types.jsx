// lib/api/types.js

const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchTypes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/type`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch types:', error);
        throw error;
    }
};

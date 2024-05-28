// lib/api/editionsByType.js

const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchEditionsByType = async (type) => {
    try {
        const response = await fetch(`${API_BASE_URL}/type/${type}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch editions by type:', error);
        throw error;
    }
};

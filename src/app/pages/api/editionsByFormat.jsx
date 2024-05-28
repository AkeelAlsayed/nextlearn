// lib/api/editionsByFormat.js

const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchEditionsByFormat = async (format) => {
    try {
        const response = await fetch(`${API_BASE_URL}/format/${format}`);
        console.log(response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch editions by format:', error);
        throw error;
    }
};

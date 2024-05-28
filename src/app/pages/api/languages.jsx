// lib/api/languages.js

const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchLanguages = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/edition/language`);
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const data = await response.json();
        // console.log(data); // This log will appear in the browser's console
        return data;
    } catch (error) {
        console.error('Failed to fetch languages:', error); // This log will appear in the browser's console
        throw error;
    }
};

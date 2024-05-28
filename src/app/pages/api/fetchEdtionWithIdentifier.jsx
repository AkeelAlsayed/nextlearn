const API_BASE_URL = "http://api.alquran.cloud/v1";

export const fetchQuranByEditionIdentifier = async (identifier) => {
    try {
        const response = await fetch(`${API_BASE_URL}/quran/${identifier}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch Quran by identifier:', error);
        throw error;
    }
};

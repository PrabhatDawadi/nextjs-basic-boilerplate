import axios from 'axios';

const fetchData = async (method, url) => {
    try {
        const response = await axios({ 
            method: method, 
            url: url,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
};

export const httpCall = async (method, url) => {

    const response = await fetchData(method, url);
    return response;
}
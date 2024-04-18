import axios from 'axios';

const apiCaller = async () => {
    try {
        const response = await axios.get('http://valorant-api.com/v1/agents');
        // const parsedResponse = JSON.parse(response.data.data);
        return response.data;
    } catch {
        console.log('api call failed');
    }
}

export default apiCaller;
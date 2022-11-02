
import axios from 'axios';

const KEY = 'AIzaSyDEmpKMPW39e3QO6knm0wMFAqplO6d7DnM';
const BASE = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL : BASE,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


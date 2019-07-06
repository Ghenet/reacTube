import axios from 'axios';

const KEY = 'AIzaSyBR0kjZmMiHCEjpvPIUAsAmoY4m1mtFY2g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        maxResults: 6,
        key: KEY
    }
});
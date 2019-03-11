import axios from 'axios';

const KEY = 'AIzaSyCl9DCkham8kcV0tfiNwPF_F2f-jA-jA6o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxLength: 5,
        key: KEY
    }
});
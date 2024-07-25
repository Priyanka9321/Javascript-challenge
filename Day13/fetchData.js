// Task 7
// npm i axios - install
import axios from "axios";

// Example URL for a public API
const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData() {
    try {
        const response = await axios.get(url);
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
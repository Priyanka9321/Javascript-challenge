const apiKey = '208473e6'; // Replace with your API key
const apiUrl = 'http://www.omdbapi.com/';

async function fetchMovies(query) {
    try {
        const response = await fetch(`${apiUrl}?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
        const data = await response.json();
        console.log(data); // Log the response data
        displayMovies(data.Search);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
            `;
            resultsContainer.appendChild(movieElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No movies found.</p>';
    }
}

async function fetchMovieDetails(imdbID) {
    try {
        const response = await fetch(`${apiUrl}?i=${imdbID}&apikey=${apiKey}`);
        const movie = await response.json();
        displayMovieDetails(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

function displayMovieDetails(movie) {
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p><strong>Release Year:</strong> ${movie.Year}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
    `;
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-query').value;
    if (query) {
        fetchMovies(query);
    }
});

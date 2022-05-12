const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey:'9d971012e12046796ef24537738a5fbd',
    originalImage:(imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image:(imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
}

export default apiConfig;
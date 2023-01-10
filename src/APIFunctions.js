//This function performs a movie search and returns all results
//@params query - search term
export async function Search(query) {
    let response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=f5604c25f659677376b14ea5c6d6171d&query='+encodeURIComponent(query))
    let jsonResponse = await response.json()
    let results = await jsonResponse.results
    return results;
}

//This function returns the details of a specific movie based on its id
//@params id - move id
export async function getMovieDetails(id) {
    let response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=f5604c25f659677376b14ea5c6d6171d')
    let jsonResponse = await response.json()
    return jsonResponse
}
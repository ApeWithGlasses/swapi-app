export const swapiService = async ( section ) => {
    const URL = `https://swapi.dev/api/${ section }`;

    const REQUEST = {
        method: 'GET',
    }

    let responseRequest = await fetch(URL, REQUEST);
    let response = await responseRequest.json();

    return response.results;
}
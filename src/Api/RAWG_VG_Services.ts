const ApiKey = 'e3bf29757fae442f8e2fee140fdcea98'
const path = 'https://api.rawg.io/api/games'


export const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games?page=2')
    .then(resp => resp.json())
    .then(({data}) => console.log(data.results))
}

export const search = async (search : string) => {
    try {
        const res = await fetch('https://api.rawg.io/api/games?key='+ApiKey+'&search='+search);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
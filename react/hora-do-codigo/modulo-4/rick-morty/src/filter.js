function filterByStatus(personagens, status) {
    return personagens.filter(personagem => personagem.status === status);
}

function filterByGender(personagens, gender) {
    return personagens.filter(personagem => personagem.gender === gender);
}

function filterByEpisode(personagens, episode) {
    const episodes = personagens.reduce((episodes, character) => {
        return mapCharacterToEpisodes(episodes, character);
    }, {});
    return episodes[episode];
}

function getEpisodeFromURL(url) {
    const urlSplited = url.split("/");
    return urlSplited[urlSplited.length - 1];
}

function generateEpisodeList(character) {
    return character.episode.map(url => getEpisodeFromURL(url));
}

function mapCharacterToEpisodes(episodes, character) {
    const characterEpisodes = generateEpisodeList(character);

    let newEpisodes = { ...episodes };

    characterEpisodes.map(episode => {
        if (newEpisodes[episode]) {
            newEpisodes = {
                ...newEpisodes,
                [episode]: [...newEpisodes[episode], character]
            }
            return;
        }
        newEpisodes[episode] = [character];
    });

    return newEpisodes;
}

module.exports = {
    filterByStatus,
    filterByGender,
    filterByEpisode,
    getEpisodeFromURL,
    generateEpisodeList,
    mapCharacterToEpisodes
}
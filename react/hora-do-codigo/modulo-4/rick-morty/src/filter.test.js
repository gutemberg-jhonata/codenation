const filtro = require('./filter');
const data = require('./data');

describe('Filtro', () => {
    describe("Status", () => {
        it("retona somente os vivos", () => {
            const response = filtro.filterByStatus(data.results, 'Alive');
            expect(response.length).toBe(8);
        });

        it("retona somente os mortos", () => {
            const response = filtro.filterByStatus(data.results, 'Dead');
            expect(response.length).toBe(6);
        });

        it("retona somente os desconhecidos", () => {
            const response = filtro.filterByStatus(data.results, 'unknown');
            expect(response.length).toBe(6);
        });
    });

    describe("Sexo", () => {
        it("retorna somente os Homens", () => {
            const response = filtro.filterByGender(data.results, 'Male');
            expect(response.length).toBe(15);
        });

        it("retorna somente as Mulheres", () => {
            const response = filtro.filterByGender(data.results, 'Female');
            expect(response.length).toBe(4);
        });

        it("retorna somente os Desconhecidos", () => {
            const response = filtro.filterByGender(data.results, 'unknown');
            expect(response.length).toBe(1);
        });
    });

    describe("Episodios", () => {
        it("Retorna episodio 6 da url", () => {
            const response = filtro.getEpisodeFromURL("https://rickandmortyapi.com/api/episode/6");
            expect(response).toBe('6');
        });

        it("Retorna um array de numeros dos episódios", () => {
            const personagem = data.results[6];
            expect(personagem.name).toBe('Abradolf Lincler');
            expect(filtro.generateEpisodeList(personagem)).toEqual(['10', '11']);
        });

        it("Retorna um array dos personagens dos episódios", () => {
            const personagem = data.results[6];
            const ricky = data.results[0];
            const episodes = {
                '10': [ricky],
                '11': [ricky]
            }
            const response = filtro.mapCharacterToEpisodes(episodes, personagem);
            expect(response['10'].length).toBe(2);
            expect(response['10'][1].name).toBe(personagem.name);
        });

        it("Retorna somente Rick e Morty para o episódio 1", () => {
            const response = filtro.filterByEpisode(data.results, '1');
            expect(response.length).toBe(2);
            expect(response[0].name == "Rich Sanches");
            expect(response[1].name == "Morty Smith");
        });
    });
});
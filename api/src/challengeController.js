const challengeRoutes = require('./challengeRoutes');

module.exports.arrayLength = arrayLength;
    async function arrayLength() {
        const lengths = await challengeRoutes.arrayLengths();

        //Devuelve array con todos los numeros entre 1 y num
        let arrayLengthCounter = (num) => {
            let numbers = [];
            for(let i = 1; i <= num; i++){
              numbers.push(i);
            }
            return numbers;
        }  
        
        const charsLength = arrayLengthCounter(await lengths[0]);
        const locationsLength = arrayLengthCounter(await lengths[1]);
        const episodesLength = arrayLengthCounter(await lengths[2]);
        
        return {charsLength, locationsLength, episodesLength};
    };

module.exports.charFinder = charFinder;
    async function charFinder() {
        const fullArray = await challengeRoutes.getFullArray();

        //.split divide el array de strings cada vez que encuentra el char y devuelve el numero de strings resultantes
        finder = (array, char) => {
            return array.map(loc => loc.name.toLowerCase()).toString()
            .split(char).length - 1;
        }

        const locationCount = finder(fullArray[1], 'l');
        const episodeCount = finder(fullArray[2], 'e');
        const characterCount = finder(fullArray[0], 'c');
        
        return {locationCount, episodeCount, characterCount};
    };

module.exports.episodeLocations = episodeLocations;
    async function episodeLocations() {
        const fullArray = await challengeRoutes.getFullArray();
        let result = [];
        //Itero array de episodios
        await fullArray[2].forEach((ep) =>{
            const set = new Set();
            //Itero cada personaje de cada episodio
            ep.characters.forEach((ch) => {
                //Tomo el id de cada personaje
                let index = ch.lastIndexOf('/') + 1;
                let ids = ch.substring(index);
                //Con el id de cada personaje busco los origenes en array de personajes
                let origins = fullArray[0][ids -1].origin.name
                //Guardo el resultado en un objeto Set para evitar repeticiones
                set.add(origins);
            });

                // data[data.length -1].results.push({            
            result.push({
                name: ep.name, 
                episode: ep.episode, 
                locations: [...set]     
            });
        });
        return result;
    }
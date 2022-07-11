const axios = require('axios');
const challengeController = require('./challengeController');
const url = 'https://rickandmortyapi.com/api';


module.exports.arrayLengths = arrayLengths;
    async function arrayLengths() {
        try{
            const result = await Promise.all([
                axios.get(url + '/character').then((res) => res.data.info.count),
                axios.get(url + '/location').then((res) => res.data.info.count),
                axios.get(url + '/episode').then((res) => res.data.info.count),
            ]);
          return result;
        }
        catch(e){
            console.log(e);
        }
    };

module.exports.getFullArray = getFullArray;
    async function getFullArray() {
        try{
            const lengths = await challengeController.arrayLength();

            const result = await Promise.all([
            axios.get(url + '/character/' + lengths.charsLength).then((res) => res.data),
            axios.get(url + '/location/' + lengths.locationsLength).then((res) => res.data),
            axios.get(url + '/episode/' + lengths.episodesLength).then((res) => res.data),
            ]);
            return result;
        }
        catch(e){
            console.log(e);
        }
    };
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const challengeController = require('./src/challengeController');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// PORT: http://localhost:3000

app.get("/test", async (req, res) => {

  try{
    //////////////////////////////////Char Counter/////////////////////////////////////
    let initCharCounter = new Date().getTime();

    const getSeconds = (endTime, initTime) => {
      return ((endTime - initTime) / 1000).toString();
    }

    const isInTime = (counterTime) => {
      return counterTime < 3 ?  true : false;
    }
    
    //Traigo los resultados del char finder
    const charFinder = Object.values(await challengeController.charFinder());
    
    let data = [];
    data.push({
      exercise_name: 'Char counter',
      seconds: '',
      in_time: false,
      results: [
        {
          char: 'l',
          count: charFinder[0],
          resource: 'location',
        },
        {
          char: 'e',
          count: charFinder[1],
          resource: 'episode',
        },
        {
          char: 'c',
          count: await charFinder[2],
          resource: 'character',
        },
      ]
    });
    
    let endCharCounter = new Date().getTime();

    let charCounterTime = getSeconds(endCharCounter, initCharCounter);

    data[0]['seconds'] = charCounterTime;

    let isCharInTime = isInTime(charCounterTime);
    data[0]['in_time'] = isCharInTime;


    //////////////////////////////////Episode locations/////////////////////////////////////
      
    let initEpisodeLocations = new Date().getTime();

    data.push({
      exercise_name: 'Episode locations',
      seconds: '',
      in_time: false,
      results: [],
    })

    //Traigo los resultados de episode locations
    data[1]['results'] = await challengeController.episodeLocations();

    let endEpisodeLocations = new Date().getTime();
    
    let episodeLocationsTime = getSeconds(endEpisodeLocations, initEpisodeLocations, 1);
    let isEpInTime = isInTime(episodeLocationsTime);
    
    data[1]['seconds'] = episodeLocationsTime;
    data[1]['in_time'] = isEpInTime;

    res.status(200).json({ data });

  }
  catch(e){
    console.log(e);
  }
});

const server = app.listen(3000, function () {
  console.log("App listening at port 3000");
});

module.exports =  server;

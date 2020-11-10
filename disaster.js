const fetchUrl = require('fetch').fetchUrl;

function getDisasterEvents() {
  fetchUrl(`https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=11`, (error, meta, body) => {
    const events = JSON.parse(body).events;

    const disasters = events.map(event => { return {
      title: event.title,
      geometry: event.geometry[0].coordinates,
      date: event.geometry[0].date,
      category: event.categories[0].title
    }
    });

    console.log(disasters)
  })
}


getDisasterEvents();
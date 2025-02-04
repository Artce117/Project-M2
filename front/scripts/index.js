const renderCards = require('./renderCards') 

//* URL de la api
const URL = 'https://students-api.up.railway.app/movies'

//* Petición JQUERY
$.get(URL, (response, status) => {
  renderCards(response)
});
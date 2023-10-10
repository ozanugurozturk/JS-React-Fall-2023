// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
console.log(image);
const pokename = document.getElementById("name");
const element = document.getElementById("element");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const fetchPokemons = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const data = await response.json();
    console.log(data.results);
    console.log(data.results[0].name);
    console.log(data.results.map(pokemon => pokemon.name));
  } catch (error) {
    console.error(error);
  }
};
fetchPokemons();

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.

//    b) Log only the name of the first pokemon in the
//    pokemon objects array

//    c) Log the names of all pokemons in the array

// 3) You might know that there are more than 20 pokemons
//    in the pokedex (1050 to be exact). Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

const fetchAlakazamData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/65/');
    const data = await response.json();
    console.log(data);
    // Updating image
    image.src = data.sprites.front_default;
    // Updating table contents
    pokename.innerHTML = data.name.toUpperCase();
    element.innerHTML = data.stats[0].base_stat;
    weight.innerHTML = data.weight;
    height.innerHTML = data.height;
    types.innerHTML = data.types.map(type => type.type.name).join(', ').toUpperCase();
  } catch (error) {
    console.error(error);
  }
};

fetchAlakazamData();

const fetchRandomPokemon = async () => {
  try {
    let randomNumber = getRandomInt(151); // Use 151 to include 0 to 150
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
    const data = await response.json();
    console.log(data);

    // Attempt for Strength
    const statsArray = data.stats;
    let statsString = "";
    for (const stat of statsArray) {
      const statName = stat.stat.name.toUpperCase(); // Convert the stat name to uppercase
      const statValue = stat.base_stat;
      statsString += `${statName}: ${statValue}<br>`;
    }

    // Updating image
    image.src = data.sprites.front_default;
    // Updating table contents
    pokename.innerHTML = data.name.toUpperCase(); // Update the correct element
    element.innerHTML = statsString; // Update the correct element
    weight.innerHTML = data.weight;
    height.innerHTML = data.height;
    types.innerHTML = data.types.map(type => type.type.name).join(', ').toUpperCase();

    


  } catch (error) {
    console.error(error);
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function handleButtonClick() {
  fetchRandomPokemon();
}

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.

// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link


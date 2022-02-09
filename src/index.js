// function to create HTML for cargs
function createCard(pokemon) {
  const list = document.querySelector(".cards");
  const card = document.createElement("li");
  card.setAttribute("class", "card");
  card.style.listStyle = "none";
  card.innerHTML = `<h2 class="card--title">${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}</h2>
<img width="256" class="card--img first" src='${pokemon.sprites.other["official-artwork"].front_default}'/>
<img width="256" class="card--img second" src='${pokemon.sprites.back_default}'/>
<ul class="card--text">
<li>HP: ${pokemon.stats[0].base_stat}</li>
<li>ATTACK: ${pokemon.stats[1].base_stat}</li>
<li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
<li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
<li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
<li>SPEED: ${pokemon.stats[5].base_stat}</li>
</ul>
<p>${gamesList(pokemon)}</p>`;
 list.append(card);
}


// loops through data to create the cards
for (const pokemon of data) {
  createCard(pokemon);
}

//formats lists inside cards as needed
const allList = document.querySelectorAll(".card--text li");
for (let i = 0; i < allList.length; i++) {
  allList[i].style.listStyle = "none";
  allList[i].style.margin = "10px";
}

//formats games list
const allGames = document.querySelectorAll("p");
for (let i = 0; i < allGames.length; i++) {
  allGames[i].style.fontSize = "13px";
  allGames[i].style.margin = "20px";
}

//adds all the games required to the games list
function gamesList(pokemon) {
  let list = `GAMES: `;
  for (let i = 0; i < pokemon.game_indices.length; i++) {
    if (i === pokemon.game_indices.length - 1) {
      list += `${pokemon.game_indices[i].version.name}`;
    } else {
      list += `${pokemon.game_indices[i].version.name}, `;
    }
  }
  return list;
}


//deals with toggling? Not even sure if this is what is meant by toggling
const cards = document.querySelectorAll(".card")
const allFirst = document.querySelectorAll(".first");
const allSecond = document.querySelectorAll(".second");


for (let i = 0; i < allSecond.length; i++) {
    allSecond[i].style.display = "none";
} 


//something is happening here and I dont know what it is (do you, mr jones) 
for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function(){
        if(allSecond[i].style.display === "none"){
        allSecond[i].style.display = "block"
        allFirst[i].style.display = "none"
        number++
        }
        if(allFirst[i].style.display === "none"){
            allSecond[i].style.display = "none"
            allFirst[i].style.display = "block"
            number++
        }

    };
} 





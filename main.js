window.onload = () => {
  let characters = [];
  let filteredCharacters = [];
  const searchInput = document.getElementById('search-input');
  
  function renderCharacters(charactersArray) {
    const cardList = document.getElementById('products');
    cardList.innerHTML = '';

    charactersArray.forEach((character) => {
      const cardList = document.getElementById('products');
      const card = document.createElement('div');
      card.className = 'product-card';
      const image = document.createElement('img');
      image.setAttribute('src', character.image);
      image.setAttribute('alt', character.name);
      const name = document.createElement('h3');
      name.innerText = character.name;
      cardList.appendChild(card);
      card.appendChild(image);
      card.appendChild(name);
    });
  }
  
  function filterCharacters(event) {
    const name = event.target.value;
    filteredCharacters = characters.filter((character) => character.name
      .toLowerCase().includes(name.toLowerCase()));
    
    renderCharacters(filteredCharacters);
  }

  searchInput.addEventListener('keyup', filterCharacters);

  fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) => {
      characters = json.results;

      renderCharacters(characters);
    })
    .catch((err) => console.error(err))
}
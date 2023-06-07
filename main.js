window.onload = () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) => {
      const characters = json.results;

      characters.forEach((character) => {
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
    })
    .catch((err) => console.error(err))
}
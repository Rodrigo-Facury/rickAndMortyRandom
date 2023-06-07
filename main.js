window.onload = () => {
  const MAX_NUMBER = 826;

  const randomNumber = Math.random() * MAX_NUMBER;
  let round = Math.ceil(randomNumber);

  if (round === 0) {
    round = 1;
  }

  fetch(`https://rickandmortyapi.com/api/character/${round}`)
    .then((res) => res.json())
    .then((character) => {
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
    })
    .catch((err) => console.error(err))
}
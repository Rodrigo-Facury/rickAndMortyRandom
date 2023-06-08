window.onload = async () => {
  const MAX_NUMBER = 826;

  const randomNumber = Math.random() * MAX_NUMBER;
  let round = Math.ceil(randomNumber);

  if (round === 0) {
    round = 1;
  }

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${round}`);

    const character = await res.json();
  
    const cardList = document.getElementById('products');
    const card = document.createElement('div');
    card.className = 'product-card';
    const image = document.createElement('img');
    image.setAttribute('src', character.image);
    image.setAttribute('alt', character.name.split(' ')[0]);
    const name = document.createElement('h3');
    name.innerText = character.name.split(' ')[0];
    cardList.appendChild(card);
    card.appendChild(image);
    card.appendChild(name);
  } catch (err) {
    console.log(err);
  }
}
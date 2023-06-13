window.onload = () => {
  let color = '';

  const classname = localStorage.getItem('classname');

  if (classname) {
    color = classname;
  }

  fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) => {
      const characters = json.results;

      characters.forEach((character) => {
        const cardList = document.getElementById('products');
        const card = document.createElement('div');
        card.className = `product-card ${color}`;
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

    const colorButtons = document.getElementsByClassName('color-button');
    
    const cards = document.getElementsByClassName('product-card');

    for (let i = 0; i < colorButtons.length; i += 1) {
      colorButtons[i].addEventListener('click', (e) => {
        localStorage.setItem('classname', e.target.name);

        for (let index = 0; index < cards.length; index += 1) {
          cards[index].className = `product-card ${e.target.name}`;
        }
      })
    }
}
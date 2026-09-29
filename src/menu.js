import cevicheImg from './images/ceviche.jpg';
import lomoSaltadoImg from './images/lomo-saltado.jpg';
import ajiDeGallinaImg from './images/aji-de-gallina.jpg';

const dishes = [
  {
    name: 'Ceviche',
    desc: 'Fresh fish marinated in lime juice with red onion and sweet potato.',
    price: 's/. 25.00',
    img: cevicheImg
  },
  {
    name: 'Lomo Saltado',
    desc: 'Stir-fried beef with onions and tomatoes, served with French fries and white rice.',
    price: 's/. 30.00',
    img: lomoSaltadoImg
  },
  {
    name: 'Ají de Gallina',
    desc: 'Creamy yellow chili pepper sauce with shredded chicken, served with white rice.',
    price: 's/. 27.00',
    img: ajiDeGallinaImg
  }
];

export function loadMenu() {
  const content = document.getElementById('content');

  const menuContent = document.createElement('div');
  menuContent.id = 'menu-content';

  const menuCards = document.createElement('div');
  menuCards.id = 'menu-cards';

  dishes.forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('dish');

    const img = document.createElement('img');
    img.src = dish.img;
    img.alt = dish.name;

    const title = document.createElement('h2');
    title.textContent = dish.name;

    const desc = document.createElement('p');
    desc.textContent = dish.desc;

    const price = document.createElement('span');
    price.textContent = dish.price;

    card.append(img, title, desc, price);
    menuCards.appendChild(card);
  });

  menuContent.appendChild(menuCards);
  content.appendChild(menuContent);
}
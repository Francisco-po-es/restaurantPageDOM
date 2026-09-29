import dishSvg from './images/icon-dish.svg';

export function loadAbout() {
  const content = document.getElementById('content');

  const aboutContent = document.createElement('div');
  aboutContent.id = 'about-content';

  const aboutTitle = document.createElement('div');
  aboutTitle.id = 'about-title';

  const icon = document.createElement('img');
  icon.src = dishSvg
  icon.alt = 'icon-dish';

  const span = document.createElement('span');
  span.textContent = 'What is this restaurant about?';

  aboutTitle.append(icon, span);

  const aboutBorder = document.createElement('div');
  aboutBorder.id = 'about-border';

  const desc = document.createElement('p');
  desc.id = 'about-desc';
  desc.textContent = 'We were born out of a passion for bringing the most authentic flavors of Peru to your table. In our kitchen, we select fresh, daily ingredients and honor family recipes passed down through generations, celebrating the best of our country!';

  aboutBorder.appendChild(desc);
  aboutContent.append(aboutTitle, aboutBorder);
  content.appendChild(aboutContent);
}
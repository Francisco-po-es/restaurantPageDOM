export function pageLoad() {
    const content = document.getElementById('content');

    const homeContent = document.createElement('div');
    const homeBorder = document.createElement('div');
    const homeTitle = document.createElement('h1');

    homeContent.id = 'home-content';
    homeBorder.id = 'home-border';
    homeTitle.id = 'home-title';
    homeTitle.textContent = 'Welcome to Fran Restaurant';

    content.appendChild(homeContent);
    homeContent.appendChild(homeBorder);
    homeBorder.appendChild(homeTitle);
}
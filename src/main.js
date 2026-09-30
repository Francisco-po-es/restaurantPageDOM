import "./styles.css";
import { pageLoad } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', () => {
    content.innerHTML = "";
    pageLoad();
})

menuBtn.addEventListener('click', () => {
    content.innerHTML = "";
    loadMenu();
})

aboutBtn.addEventListener('click', () => {
    content.innerHTML = "";
    loadAbout();
})

pageLoad();
console.log('First try');
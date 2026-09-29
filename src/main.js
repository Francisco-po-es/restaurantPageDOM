import "./styles.css";
import { pageLoad } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

pageLoad();
loadMenu();
loadAbout();

console.log('First try');
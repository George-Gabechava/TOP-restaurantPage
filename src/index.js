console.log('Hello Worlds!');

import './style.css';
import tab1Function from './tab1.js';
import tab2Function from './tab2.js';
import tab3Function from './tab3.js';

import './src/ab-synth.webp';
import './src/bullet.png';
import './src/womanbullet.jpg';


const button1 = document.getElementById("tab1");
button1.addEventListener('click', tab1Function);

const button2 = document.getElementById("tab2");
button2.addEventListener("click", tab2Function);

const button3 = document.getElementById("tab3");
button3.addEventListener("click", tab3Function);


<<<<<<< HEAD
import './style.css';


////Make a new branch to mess with these imports
////try to just do import './tab1.js' with no default functions?

////Unable to get index.js to import files

// import tab1Function from './tab1.js';
// import tab2Function from './tab2.js';

// const button1 = document.getElementById("tab1");
// button1.addEventListener('click', tab1Function)

// const button2 = document.getElementById("tab2");
// button2.addEventListener('click', tab2Function);

=======
>>>>>>> develop
console.log('Hello Worlds!');

import './style.css';
import tab1Function from './tab1.js';
import tab2Function from './tab2.js';
import tab3Function from './tab3.js';

const button1 = document.getElementById("tab1");
button1.addEventListener('click', tab1Function);

const button2 = document.getElementById("tab2");
button2.addEventListener("click", tab2Function);

const button3 = document.getElementById("tab3");
button3.addEventListener("click", tab3Function);


//current Tab tracker variable across all js files
window['currentTab'] = 0;

//Run at start; default page
tab1Function();

import bullet from './bullet.png';

export default function tab1Function() {
  //debugging
  //console.log("I ran tab1Function");

  //replace current tab
  if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 
    
    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
  
  }
  //set global variable to current tab
  currentTab = 1;

  //start creating page
  const content = document.getElementById("content");

  //header
  const tabContain = document.createElement('div');
  tabContain.id = 'tabContainer';

  const title = document.createElement('div');
  title.id = "subheader";
  tabContain.append(title);

  const headerContain = document.createElement('div');
  headerContain.className = "headerContain";
  title.append(headerContain);
  
  const titleHeader = document.createElement('h1');
  titleHeader.innerText = 'Lead and Breakfast 2077';
  headerContain.append(titleHeader);

  //intro
  const introContain = document.createElement('div');
  introContain.className = "introContain";
  introContain.id = "introContainFirst";
  tabContain.append(introContain);

  const bullet = document.createElement("img");
  bullet.setAttribute("src", "/src/bullet.png");
  bullet.setAttribute("height", "100px");
  introContain.append(bullet);

  const introBody = document.createElement('h3');
  introBody.innerText = "A hot stop in Night City. This eatery was founded by solos, for solos. \
  Whether you need to wind down from a job or wind up for the next job, we've got you covered. We are the one-stop-shop for all a solo could need.";
  introContain.append(introBody);

  const introBody2 = document.createElement('h2');
  let sometext = "-Some Mercenary";
  introBody2.innerHTML = "&emsp;" + "&emsp;" + "&emsp;" + sometext;
  introBody.append(introBody2);

  //hours
  const introContain2 = document.createElement('div');
  introContain2.className = "introContain";
  tabContain.append(introContain2);

  const bullet2 = document.createElement("img");
  bullet2.setAttribute("src", "/src/bullet.png");
  bullet2.setAttribute("height", "75px");
  introContain2.append(bullet2);
  
  const hoursBody = document.createElement('h2');
  hoursBody.innerHTML = "&emsp;" + "&emsp;" + "Hours";
  introContain2.append(hoursBody);

  const hoursBody2 = document.createElement('h5');
  hoursBody2.innerHTML = "Tuesday-Sunday: 5:00PM - 9:00AM" + "<br />" + "Monday: CLOSED";
  hoursBody.append(hoursBody2);

  //location
  const introContain3 = document.createElement('div');
  introContain3.className = "introContain";
  tabContain.append(introContain3);

  const bullet3 = document.createElement("img");
  bullet3.setAttribute("src", "/src/bullet.png");
  bullet3.setAttribute("height", "75px");
  introContain3.append(bullet3);
  
  const locationBody = document.createElement('h2');
  locationBody.innerHTML = "&emsp;" + "&emsp;" + "Location";
  introContain3.append(locationBody);

  const locationBody2 = document.createElement('h5');
  locationBody2.innerText = "123 27th Street, Night City";
  locationBody.append(locationBody2);

  //footer
  const footer = document.createElement('div');
  footer.id = 'footer';
  container.append(footer);

  const footerBody = document.createElement('p');
  footerBody.innerHTML = "Made by " + "<a href=https://github.com/George-Gabechava>George-Gabechava</a>" + " for The Odin Project";
  footer.append(footerBody);

  const footerBody2 = document.createElement('p');
  footerBody2.innerHTML = "Github " + "<a href=https://github.com/George-Gabechava/TOP-restaurantPage>Source Code</a>";
  footer.append(footerBody2);
    
  content.append(tabContain);
};
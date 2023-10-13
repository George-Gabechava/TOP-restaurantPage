import absypic from './ab-synth.webp';
import lagerpic from './bro-lager.webp';
import croissantpic from './croissant.webp';
import tamalepic from './tamale.webp';
import bulletpic from './bullet.png';




export default function tab2Function() {
    //debugging console.log
    // console.log("I ran tab2Function");

    //delete current tab if needed
    if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 

    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
    }

    //start creating page
    const content = document.getElementById("content");

    const tabContain = document.createElement('div');
    tabContain.id = 'tabContainer';

    //header
    const title = document.createElement('div');
    title.id = "subheader";
    tabContain.append(title);

    const headerContain = document.createElement('div');
    headerContain.className = "headerContain";
    title.append(headerContain);

    const titleHeader = document.createElement('h1');
    titleHeader.innerHTML = "&emsp;"+"&emsp;" + 'Menu' + "&emsp;"+"&emsp;";
    headerContain.append(titleHeader);

    //subheader beverages
    const headerContain2 = document.createElement('div');
    headerContain2.className = "subheaderContain";
    tabContain.append(headerContain2);

    const titleHeader2 = document.createElement('h2');
    titleHeader2.innerText = "Beverages";
    headerContain2.append(titleHeader2);

    //items beverages
    const beverage1 = document.createElement('div');
    beverage1.className = "beverageContain";
    tabContain.append(beverage1);

    const beverageImg1 = document.createElement("img");
    beverageImg1.src = absypic;
    beverageImg1.setAttribute("height", "75px");
    beverage1.append(beverageImg1);
    
    const bevName1 = document.createElement('h3');
    bevName1.innerHTML = "Ab-Synth";
    beverage1.append(bevName1);

    const bevDesc1 = document.createElement('h5');
    bevDesc1.innerText = "Be intense. Be Bohemian."
    bevName1.append(bevDesc1);

    const bevPrice1 = document.createElement('h4');
    bevPrice1.innerHTML = "&euro;"+"&dollar;"+"11";
    bevName1.append(bevPrice1);


    const beverage2 = document.createElement('div');
    beverage2.className = "beverageContain";
    tabContain.append(beverage2);

    const beverageImg2 = document.createElement("img");
    beverageImg2.src = lagerpic;
    beverageImg2.setAttribute("height", "75px");
    beverage2.append(beverageImg2);
    
    const bevName2 = document.createElement('h3');
    bevName2.innerHTML = "Broseph Lager";
    beverage2.append(bevName2);

    const bevDesc2 = document.createElement('h5');
    bevDesc2.innerText = "Light-coloured & highly carbonated beverage."
    bevName2.append(bevDesc2);

    const bevPrice2 = document.createElement('h4');
    bevPrice2.innerHTML = "&euro;"+"&dollar;"+"9";
    bevName2.append(bevPrice2);

    //subheader food
    const headerContain3 = document.createElement('div');
    headerContain3.className = "subheaderContain";
    tabContain.append(headerContain3);

    const titleHeader3 = document.createElement('h2');
    titleHeader3.innerText = "Breakfasts";
    headerContain3.append(titleHeader3);

    //items food
    const food1 = document.createElement('div');
    food1.className = "foodContain";
    tabContain.append(food1);

    const foodImg1 = document.createElement("img");
    foodImg1.src = croissantpic;
    foodImg1.setAttribute("height", "75px");
    food1.append(foodImg1);
    
    const foodName1 = document.createElement('h3');
    foodName1.innerHTML = "Pierre's Croissant";
    food1.append(foodName1);

    const foodDesc1 = document.createElement('h5');
    foodDesc1.innerText = "Flaky synthetic buttery goodness!."
    foodName1.append(foodDesc1);

    const foodPrice1 = document.createElement('h4');
    foodPrice1.innerHTML = "&euro;"+"&dollar;"+"7";
    foodName1.append(foodPrice1);


    const food2 = document.createElement('div');
    food2.className = "foodContain";
    tabContain.append(food2);

    const foodImg2 = document.createElement("img");
    foodImg2.src = tamalepic;
    foodImg2.setAttribute("height", "75px");
    food2.append(foodImg2);
    
    const foodName2 = document.createElement('h3');
    foodName2.innerHTML = "Loaded Tamales";
    food2.append(foodName2);

    const foodDesc2 = document.createElement('h5');
    foodDesc2.innerText = "Wrapped in real corn husks!"
    foodName2.append(foodDesc2);

    const foodPrice2 = document.createElement('h4');
    foodPrice2.innerHTML = "&euro;"+"&dollar;"+"9";
    foodName2.append(foodPrice2);

    //Lead
    //subheader food
    const headerContain4 = document.createElement('div');
    headerContain4.className = "subheaderContain";
    tabContain.append(headerContain4);

    const titleHeader4 = document.createElement('h2');
    titleHeader4.innerText = "Lead";
    headerContain4.append(titleHeader4);

    //items
    const introContain4 = document.createElement('div');
    introContain4.className = "introContain";
    tabContain.append(introContain4);

    const bullet4 = document.createElement("img");
    bullet4.src = bulletpic;
    bullet4.setAttribute("height", "75px");
    introContain4.append(bullet4);
    
    const leadHeader = document.createElement('h2');
    leadHeader.innerHTML = "See Vendor";
    introContain4.append(leadHeader);

    const leadDesc = document.createElement('h5');
    leadDesc.innerText = "Please see the vendor on staff selling merchandise for all your mercenary needs.";
    leadHeader.append(leadDesc);

    //footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    container.append(footer);

    const footerBody = document.createElement('p');
    title.className = "footerbody";
    footerBody.innerHTML = "Made by " + "<a href=https://github.com/George-Gabechava>George-Gabechava</a>" + " for The Odin Project";
    footer.append(footerBody);

    const footerBody2 = document.createElement('p');
    title.className = "footerbody";
    footerBody2.innerHTML = "Github " + "<a href=https://github.com/George-Gabechava/TOP-restaurantPage>Source Code</a>";

    //append this file to website
    footer.append(footerBody2);

    content.append(tabContain);
}
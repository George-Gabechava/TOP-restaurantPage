//dev - run at start; default page
tab2Function();

function tab2Function() {
    console.log("run tab2 function");

    if (currentTab != 0) {
    const parent = document.getElementById("container");

    const afoot = document.getElementById("footer");
    parent.removeChild(afoot);

    const parent2 = document.getElementById("content"); 

    const child = document.getElementById("tabContainer");
    parent2.removeChild(child);
    }

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

    //beverages

    //subheader
    const headerContain2 = document.createElement('div');
    headerContain2.className = "subheaderContain";
    tabContain.append(headerContain2);

    const titleHeader2 = document.createElement('h2');
    titleHeader2.innerText = "Beverages";
    headerContain2.append(titleHeader2);

    //items
    














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

    footer.append(footerBody2);

    content.append(tabContain);
}
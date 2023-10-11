function tab3Function() {
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
    headerContain.id = "contactHead1";
    title.append(headerContain);

    const titleHeader = document.createElement('h1');
    titleHeader.innerHTML = "&emsp;"+"&emsp;" + 'Contact Us' + "&emsp;"+"&emsp;";
    headerContain.append(titleHeader);


    //subheader
    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", "/src/womanbullet.jpg");
    contactImg.setAttribute("height", "500px");
    tabContain.append(contactImg);


    const contactContain = document.createElement('div');
    contactContain.className = "headerContain";
    contactContain.id = "contactHead2";
    tabContain.append(contactContain);

    const contactHeader = document.createElement('h2');
    contactHeader.innerText = "Contact Info:";
    contactContain.append(contactHeader);

    const contactInfo = document.createElement('h5');
    contactInfo.innerHTML = "777-777-2077" + "<br />" + "LeadAndBreakfast@fake.com";
    contactHeader.append(contactInfo);






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

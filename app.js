
const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `white`;
body.style.display = `flex`;
body.style.flexDirection = `column`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;
body.style.margin = `0`;

const header = document.createElement(`div`);
header.style.width = `100vw`;
header.style.height = `10vh`;
header.style.display = `flex`;
header.style.justifyContent = `center`;
header.style.alignItems = `center`;
header.style.backgroundColor = `white`;
body.appendChild(header);

const gitbutton = document.createElement(`img`);
gitbutton.src = `design/acio.svg`
gitbutton.style.backgroundSize = `2opx`;;
gitbutton.style.width = `15vh`;
gitbutton.style.height = `auto`;
gitbutton.style.borderRadius = `20px`;
gitbutton.style.margin = `10px`;
gitbutton.style.color = `white`;
gitbutton.style.fontFamily = 'Roboto Slab, serif';
gitbutton.style.fontSize = `13px`;
gitbutton.style.padding = `8px`;
gitbutton.style.border = `none`;
header.appendChild(gitbutton);

const main = document.createElement(`div`);
main.style.width = `100vw`;
main.style.height = `80vh`;
main.style.display = `flex`;
main.style.justifyContent = `center`;
main.style.alignItems = `center`;
main.style.background = `linear-gradient(45deg, rgba(255,89,89,1) 0%, rgba(195,0,0,1) 50%, rgba(255,66,0,1) 100%)`;

body.appendChild(main);

const footer = document.createElement(`div`);
footer.style.width = `100vw`;
footer.style.height = `10vh`;
footer.style.display = `flex`;
footer.style.justifyContent = `center`;
footer.style.alignItems = `center`;
footer.style.backgroundColor = `white`;
body.appendChild(footer);

const message = document.createElement(`h3`);
message.textContent = `Made with 💗 por phc-s`;
message.style.fontFamily = 'Roboto Slab, serif';
message.style.height = `16px`;
message.style.fontSize = `16px`;
message.style.backgroundColor = `white`;
footer.appendChild(message);


const table = document.createElement(`div`);
table.style.width = `50vw`;
table.style.height = `70vh`;
table.style.display = `flex`;
table.style.justifyContent = `space-evenly`;
table.style.alignItems = `center`;
table.style.flexDirection = `column`
table.style.backgroundColor = `black`;
table.style.color = 'white';
table.style.fontFamily = 'Roboto Slab, serif';
table.style.fontSize = '24px'
table.style.borderRadius = `50px`;
main.appendChild(table);

const mainText = document.createElement(`h3`);
mainText.textContent = `ACIO Calculator`;
table.appendChild(mainText);

const showText = document.createElement(`div`);
showText.style.width = `40vw`;
showText.style.height = `10vh`;
showText.style.borderRadius = `25px`;
showText.style.backgroundColor = `white`
table.appendChild(showText);

gitbutton.addEventListener(`click`, function () {

    function openInNewTab(page) {
        const web = window.open(page, '_blank');
        web.focus();
    }


    openInNewTab('http://www.github.com/phc-s')

})
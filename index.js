
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const myName = "Josh"
const victory= "is the champion"

const newHeader = document.createElement("h1");

newHeader.id = "victory";
newHeader.innerHTML = `${myName.toUpperCase()} ${victory}`;

document.body.append(newHeader);

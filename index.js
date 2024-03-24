// const element = document.createElement("div");
// document.body.append(element);

// const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello, World!</h1>";


// element.style.backgroundColor = "red";

// element.textContent = "This is some new text.";

// element.className = "new-class";
// element.classList.add("another-class");

const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

newHeader.textContent = "Jacka Cisse is the champion";

const block = document.querySelector('.generate');
const button = document.querySelector(".button");

let rating = 2882;

button.addEventListener("click", () => {
    rating = Math.floor(Math.random()*2700);
    block.innerText = "Рейтинг шахматиста -" + rating.toString();
})

console.log(block)

let countOfLetters = 1

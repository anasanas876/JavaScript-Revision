const colors = [
    { color: "red" },
    { color: "blue" },
    { color: "green" }
];

const head = document.getElementById("color-name");
const buttons = document.querySelectorAll(".color-btn");
const random = document.getElementById("random-btn");
// executes a function for a specfic button clicked
buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {

        const selectedButton = e.currentTarget;
        const selectedColor = selectedButton.dataset.color;

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        selectedButton.classList.add("active");

        document.body.style.backgroundColor = selectedColor;
        head.textContent = selectedColor;
    });
});
// This gets eecuted when a random button is clicked to generate random color
random.addEventListener("click", function () {

    const randomIndex = RandomNumber();
    const randomColor = colors[randomIndex].color;

    document.body.style.backgroundColor = randomColor;
    head.textContent = randomColor;
});
// Generates Random Number for random color generation
function RandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
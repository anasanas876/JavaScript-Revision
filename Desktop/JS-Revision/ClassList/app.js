const button = document.querySelector(".Button");

button.addEventListener("click", function() {

    if (button.classList.contains("Button")) {

        button.classList.add("Heading");

    }

});

// 
if (button.classList.contains("Button")){
    button.classList.add("red")
}

const div=document.querySelector("Div")

div.addEventListener("Click",function(){
    div.classList.toggle("Div")
})
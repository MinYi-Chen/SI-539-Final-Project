window.addEventListener("load", function() {
    console.log("Page loaded");
});

// View Toggle for Ingredients and Instructions on Mobile ===
let btnIngredients = document.querySelector("#btn-ingredients");
let btnInstructions = document.querySelector("#btn-instructions");
let ingredientsView = document.querySelector("#ingredients-view");
let instructionsView = document.querySelector("#instructions-view");

// Check if elements exist before adding event listeners
if (btnIngredients && btnInstructions) {

    // when Ingredients button is clicked
    btnIngredients.addEventListener("click", function() {
        console.log("Switched to Ingredients");

        // Show Ingredients, Hide Instructions
        ingredientsView.classList.remove("mobile-hidden");
        instructionsView.classList.add("mobile-hidden");

        // Update active button styles
        btnIngredients.classList.add("active");
        btnInstructions.classList.remove("active");
    });

    // when Instructions button is clicked
    btnInstructions.addEventListener("click", function() {
        console.log("Switched to Instructions");

        // Show Instructions, Hide Ingredients
        instructionsView.classList.remove("mobile-hidden");
        ingredientsView.classList.add("mobile-hidden");

        // Update active button styles
        btnInstructions.classList.add("active");
        btnIngredients.classList.remove("active");
    });
}
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

// Category Filter for All Recipes Page
let recipeFilter = document.querySelector("#recipe-filter");
let recipeCards = document.querySelectorAll(".recipe-card");

// Check if the filter dropdown exists before adding event listener
if (recipeFilter) {
    recipeFilter.addEventListener("change", function() {
        // get the selected value from the dropdown
        let filterValue = this.value;

        // Check each recipe card
        recipeCards.forEach(card => {
            let cardCategory = card.getAttribute("data-category");

            // If 'all' is selected or the card's category matches the selected value, show it
            if (filterValue === "all" || filterValue === cardCategory) {
                card.classList.remove("hidden");
            } else {
                // Otherwise, add the hidden class to hide it
                card.classList.add("hidden");
            }
        });
    });
}
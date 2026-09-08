"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const characterCards = document.querySelectorAll(".character-card");

    characterCards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-selected");
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.click();
            }
        });
    });
});

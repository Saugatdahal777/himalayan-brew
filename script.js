
// =================================
// HIMALAYAN BREW — JAVASCRIPT
// =================================


// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {

    const isOpen = menuToggle.classList.toggle("active");

    navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// Automatically update copyright year

const yearElement = document.querySelector("#year");

yearElement.textContent = new Date().getFullYear();


// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".intro, .section-heading, .menu-card, .story-content, .story-image, .quote-section, .visit-content, .visit-image"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {
    observer.observe(element);
});

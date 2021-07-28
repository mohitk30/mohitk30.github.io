AOS.init();
// to show contact

function borderblogs() {
    document.getElementById("blogs-head").style.boxShadow = "2px 2px 6px rgb(255, 255, 255)";
    document.getElementById("projects-head").style.boxShadow = "none";

    document.getElementById("blog").style.display = "block";



    document.getElementById("project").style.display = "none";




}

function borderprojects() {
    document.getElementById("blogs-head").style.boxShadow = "none";
    document.getElementById("projects-head").style.boxShadow = "2px 2px 6px rgb(255, 255, 255)";
    document.getElementById("blog").style.display = "none";



    document.getElementById("project").style.display = "flex";



}
// preloader

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Programer", "Cyberpunk", "Coder", "Developer", "Front End Enthusiast"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

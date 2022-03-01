//parallax

function paralax(element,distance, speed) {
    const item = document.querySelector(element)

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function() {
    paralax("header", window.scrollY, 1);
    paralax('.small-rose', window.scrollY, 0.1);
    paralax('.small-rose2', window.scrollY, 0.2);
    paralax('.big-rose', window.scrollY, 0.1);
}) 


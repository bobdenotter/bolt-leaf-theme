
console.log('The answer, my friend, is blowin’ in the wind. 🍃');

// Make Bulma dropdown work
var dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function(event) {

    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.input')) {
        return;
    }
    dropdown.classList.toggle('is-active');
}, false);

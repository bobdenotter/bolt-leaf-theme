import '../node_modules/prismjs/prism.js';
import '../node_modules/prismjs/components/prism-apacheconf.js';
import '../node_modules/prismjs/components/prism-bash.js';
import '../node_modules/prismjs/components/prism-css.js';
import '../node_modules/prismjs/components/prism-json.js';
import '../node_modules/prismjs/components/prism-markdown.js';
import '../node_modules/prismjs/components/prism-php.js';
import '../node_modules/prismjs/components/prism-python.js';
import '../node_modules/prismjs/components/prism-sass.js';
import '../node_modules/prismjs/components/prism-twig.js';
import '../node_modules/prismjs/components/prism-yaml.js';
import '../node_modules/prismjs/components/prism-markup-templating.js';
import '../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js';
import '../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js';

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

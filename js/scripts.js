// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

console.log('Whaaat');

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.name);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function main() {
    // Make all hamburger menus display content when clicked.
    const dropdownToggles = document.querySelectorAll('.navbar-burger');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const navMenu = document.getElementById(toggle.dataset.target);
            toggle.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });
    });

    console.log('Core JS module loaded...');

    // Visit counter
    let counter = Number.parseInt(window.localStorage.getItem('modeCounter'));
    if (window.location.href == 'https://jaime-barillas.github.io/mode-p1/' ||
        window.location.href == 'https://jaime-barillas.github.io/mode-p1/index.html') {
        counter++;
    }
    window.localStorage.setItem(counter.toString());

    let footer = document.querySelector('body > footer');
    let counterElement = document.createElement('div');
    counterElement.classList.add('content');
    counterElement.classList.add('has-text-centered');
    counterElement.textContent = counter.toString() + " Visits";
    footer.append(counterElement);
}

window.addEventListener('load', main);

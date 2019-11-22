function createItemCard(item) {
    let orders = JSON.parse(window.sessionStorage.getItem('modeOrders') || '[]');
    let btnColourClass = orders.find(orderItem => JSON.parse(orderItem).id == item.id) ?
        'is-success' : 'is-info';
    let card = document.createElement('div');

    card.classList.add('column');
    card.classList.add('is-one-quarter');
    card.innerHTML = `
    <div class="card">
        <p class="card-header-title">${item.name}</p>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="./assets/logo.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-6">${item.desc}</p>
                </div>
            </div>
            <div class="content">
                <footer class="card-footer">
                    <button id="btn${item.id}" class="button card-footer-item ${btnColourClass}" onclick="addToOrder(${item.id})">
                        Add To Order
                    </button>
                </footer>
            </div>
        </div>
    </div>
    `;

    return card;
}

function removeFromOrder(id) {
    let orders = JSON.parse(window.sessionStorage.getItem('modeOrders') || '[]');

    orders = orders.filter(item => JSON.parse(item).id != id);

    window.sessionStorage.setItem('modeOrders', JSON.stringify(orders));

    // Signify that the item was removed from the user's order.
    let btn = document.getElementById('btn' + id);
    btn.setAttribute('onclick', `addToOrder(${id})`);
    btn.textContent = 'Add To Order';
    btn.classList.remove('is-success');
    btn.classList.add('is-info');
}

function addToOrder(id) {
    let orders = JSON.parse(window.sessionStorage.getItem('modeOrders') || '[]');

    orders.push(JSON.stringify(menuItems[id - 1]));

    window.sessionStorage.setItem('modeOrders', JSON.stringify(orders));

    // Signify that the item was added to the user's order.
    let btn = document.getElementById('btn' + id);
    btn.setAttribute('onclick', `removeFromOrder(${id})`);
    btn.textContent = 'In Order';
    btn.classList.remove('is-info');
    btn.classList.add('is-success');
}

function main() {
    let menuList = document.getElementById('menuList');

    for (item of menuItems) {
        menuList.append(createItemCard(item));
    }
}

window.addEventListener('load', main);

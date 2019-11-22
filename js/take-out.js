function getOrders() {
    return JSON.parse(window.sessionStorage.getItem('modeOrders') || '[]');
}

function createOrderCard(order) {
    let card = document.createElement('div');

    card.classList.add('card');
    card.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">${order.name}</p>
            <p class="subtitle is-6">${order.desc}</p>
          </div>
          <a class="delete is-large"></a>
        </div>
      </div>
    </div>
    `;

    return card;
}

function randOrderNumber() {
    function randChar() {
        let chars = 'ABCEGHJKLMNPRSTVWXYZ0123456789';
        let index = Math.floor(Math.random() * Math.floor(chars.length));
        return chars[index];
    }

    let orderNumber = '';
    for (var i = 0; i < 6; i++) {
        orderNumber += randChar();
    }
    return orderNumber;
}

function main() {
    let orderList = document.getElementById('lstOrder');
    let orderNotification = document.getElementById('ntfOrder');

    // Button handlers.
    let btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', function() {
        // Remove any outstanding order number notifications.
        while (orderNotification.firstChild) {
            orderNotification.firstChild.remove();
        }

        // Remove any outstanding menu items from the list.
        while(orderList.firstChild) {
            orderList.firstChild.remove();
        }

        // Clear session storage.
        window.sessionStorage.setItem('modeOrders', '[]');
    });

    let btnOrder = document.getElementById('btnOrder');
    btnOrder.addEventListener('click', function() {
        let label = document.createElement('h2');
        let orderNumber = document.createTextNode(randOrderNumber());

        label.textContent = 'Your Order Code Is:';
        label.classList.add('is-title');
        orderNotification.appendChild(label);
        orderNotification.appendChild(orderNumber);
    });

    // Generate list of orders.
    for (order of getOrders()) {
        orderList.append(createOrderCard(JSON.parse(order)));
    }
}

window.addEventListener('load', main);

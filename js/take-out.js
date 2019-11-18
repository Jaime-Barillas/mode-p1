window.sessionStorage.setItem('modeOrders', JSON.stringify([{name: 'test', desc: 'test'}]));

function getOrders() {
    return JSON.parse(window.sessionStorage.getItem('modeOrders'));
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

function main() {
    let orderList = document.getElementById('lstOrder');
    orderList.append(createOrderCard(getOrders()[0]));
}

window.addEventListener('load', main);

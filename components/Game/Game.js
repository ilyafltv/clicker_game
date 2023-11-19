class Game {

    constructor() {
        this.keyName = 'basket';
    }

    HitTheEgg(id) {
        let basket = JSON.parse(localStorageUtil.getBasket());
        let updatedBasket = [];
        let stats = JSON.parse(localStorageUtil.getStats());

        basket[id].damage_state += 1;
        stats.totalClicks += 1;

        localStorage.setItem(this.keyName, JSON.stringify(basket));

        if (basket[id].damage_state >= 10) {
            basket.forEach((element, index) => {
                if (index != id) {
                    updatedBasket.push(element);
                }
            })
            stats.brokenEggs += 1;
            basket = updatedBasket;
        }

        localStorage.setItem('stats', JSON.stringify(stats));
        localStorage.setItem(this.keyName, JSON.stringify(basket));

        game.render();
    }

    render() {
        localStorageUtil.getStats();
        localStorageUtil.getBasket();

        let basket = JSON.parse(localStorageUtil.getBasket());
        let cards = ``;

        basket.forEach((element, index) => {
            cards += `
                <div class="egg-card">
                    <img class="egg-card__img" src="img/egg.png" alt="Яйцо" />
                    <p class="egg-card__count">${JSON.stringify(element.damage_state)}</p>
                    <button class="egg-card__btn" onClick="game.HitTheEgg(${index});">Стукнуть яйцо</button>
                </div>            
            `;
        });

        const html = `
            <div class="egg-cards">
                ${cards}
            </div>
        `;

        ROOT_GAME.innerHTML = html;
    }
}
const game = new Game();

game.render();
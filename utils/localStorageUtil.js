class LocalStorageUtil {

    constructor() {
        this.keyName = 'basket';
    }

    getBasket() {
        const localBasket = localStorage.getItem(this.keyName);
        if (localBasket !== null) {
            return localBasket;
        } else {
            localStorage.setItem(this.keyName, JSON.stringify([]));
            return [];
        }
    }

    getStats() {
        const stats = localStorage.getItem('stats');
        if (stats !== null) {
            return stats;
        } else {
            localStorage.setItem('stats', JSON.stringify({ totalClicks: 0, brokenEggs: 0 }));
            return { "totalClicks": 0, "brokenEggs": 0 };
        }
    }

    putEgg() {
        const basket = (this.getBasket() == []) ? [] : JSON.parse(this.getBasket());
        basket.push({ damage_state: 0 });
        localStorage.setItem(this.keyName, JSON.stringify(basket));
        game.render();
    }
}
const localStorageUtil = new LocalStorageUtil();
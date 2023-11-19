class Statistic {

    constructor() {
        this.keyName = 'stats';
    }

    handleClear() {
        ROOT_STATISTIC.innerHTML = '';
    }

    render() {
        const html = `
            <div class="statistic-menu">
                <p class="statistic-menu__text">Всего кликов: ${JSON.parse(localStorageUtil.getStats()).totalClicks}</p>
                <p class="statistic-menu__text">Разбитых яиц: ${JSON.parse(localStorageUtil.getStats()).brokenEggs}</p>
                <img  onclick="statistic.handleClear()" class="statistic-menu__btn-cross" src="img/cross.png">
            </div>
        `;

        ROOT_STATISTIC.innerHTML = html;
    }
}
const statistic = new Statistic();
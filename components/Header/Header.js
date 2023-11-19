class Header {

    render() {
        const html = `
            <div class="header">
                <div class="header-menu">
                    <button class="header-menu__btn" onclick="localStorageUtil.putEgg();">Добавить яйцо</button>
                    <button class="header-menu__btn" onclick="statistic.render();">Смотреть статистику</button>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}
const header = new Header();

header.render();
window.disableScroll = function () {
    const windowScroll = window.innerWidth = document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY};
    width: 100%;
    overflow: hidden;
    height: 100vh;
    padding-right ${windowScroll}px;
    `;
};


window.enableScroll = function () {
    document.body.style.cssText = 'position: relative;';
    window.scroll({top: document.body.dbScrollY})
}
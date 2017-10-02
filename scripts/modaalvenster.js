var grayBackground = document.createElement('div');
document.body.appendChild(grayBackground);
var exitButton = document.createElement('span');
exitButton.innerHTML = '&Cross;';
exitButton.className = 'exit-button';

var modaal = (function () {
    var modaalWindow = document.createElement('div');
    modaalWindow.className = 'modaal-window';
    modaalWindow.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    var modaalContent = document.createElement('div');
    modaalContent.className = 'modaal-content';

    return {
        centreren: function () {
            var top = Math.max((grayBackground.offsetHeight - modaalWindow.offsetHeight) / 2, 0);
            var left = Math.max((grayBackground.offsetWidth - modaalWindow.offsetWidth) / 2, 0);
            modaalWindow.style.top = top + 'px';
            modaalWindow.style.left = left + 'px';
        },
        open: function (parameter) {
            modaalContent.appendChild(parameter);
            modaalWindow.appendChild(modaalContent);
            modaalWindow.appendChild(exitButton);

            grayBackground.className = 'gray-background';
            grayBackground.appendChild(modaalWindow);
            modaal.centreren();
            window.addEventListener('resize', modaal.centreren(), true);
        },
        close: function () {
            modaalContent.innerHTML = '';
            modaalWindow.innerHTML = '';
            grayBackground.removeChild(modaalWindow);
            grayBackground.className = '';
        }
    }
}());

grayBackground.addEventListener('click', modaal.close);
exitButton.addEventListener('click', modaal.close);

var content_fanstille = document.getElementById('content_fanstille');
//var inhoud2 = document.getElementById('inhoud2');
var knop1 = document.getElementById('article_fanstille');
//var knop2 = document.getElementById('k2');

content_fanstille.parentNode.removeChild(content_fanstille);
//inhoud2.parentNode.removeChild(inhoud2);

knop1.addEventListener('click', function () {
    modaal.open(content_fanstille);
});
/*
knop2.addEventListener('click', function () {
    modaal.open(inhoud2);
});
*/
document.addEventListener("DOMContentLoaded", function () {
    setInterval(loop, 650);
});

var x = 0;
var baseText = "user_name";
var titleText = generateTitleText(baseText);

function loop() {
    document.title = titleText[x++ % titleText.length];
}

function generateTitleText(baseText) {
    var textArray = [];
    for (var i = 0; i < baseText.length; i++) {
        var textSegment = baseText.substring(0, i);
        if (baseText[i] !== ' ') {
            textArray.push(textSegment + '|');
        }
        textArray.push(textSegment);
    }

    for (var i = baseText.length; i >= 0; i--) {
        var textSegment = baseText.substring(0, i);
        if (i < baseText.length && baseText[i] !== ' ') {
            textArray.push(textSegment + '|');
        }
        textArray.push(textSegment);
    }
    return textArray.filter((e, i, a) => i === 0 || e !== a[i - 1]);
}
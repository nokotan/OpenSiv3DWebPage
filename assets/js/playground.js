(function(window, document) {
    var playgrounds = document.querySelectorAll(".playground");

    for (var playground of playgrounds) {
        var thumbnail = playground.querySelector("img");
        var canvas = playground.querySelector("canvas");

        thumbnail.addEventListener("click", function onClick() {
            thumbnail.removeEventListener("click", onClick);
            thumbnail.hidden = true;

            canvas.hidden = false;
            window[canvas.dataset["object"]]({ canvas });
        });
    }
})(window, document);
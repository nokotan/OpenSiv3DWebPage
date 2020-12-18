(function(window, document) {
    var playgrounds = document.querySelectorAll(".playground");

    for (var playground of playgrounds) {
        var thumbnail = playground.querySelector("img");
        var canvas = playground.querySelector("canvas");

        thumbnail.addEventListener("click", function onClick() {
            thumbnail.removeEventListener("click", onClick);
            thumbnail.hidden = true;

            canvas.hidden = false;
            console.log(canvas.dataset["src-object"]);
            window[canvas.dataset["src-object"]]({ canvas });
        });
    }
})(window, document);
(function(window, document) {
    var playgrounds = document.querySelectorAll(".playground");

    for (var playground of playgrounds) {
        var overlay = playground.querySelector(".playground-overlay");
        var canvas = playground.querySelector("canvas");

        overlay.addEventListener("click", function onClick() {
            var img = playground.querySelector(".playground-thumbnail");
            var progressFrameElement = playground.querySelector(".playground-progress-frame");
            var progressElement = playground.querySelector(".playground-progress");

            img.hidden = true;
            
            overlay.removeEventListener("click", onClick);
            overlay.hidden = true;
            
            canvas.hidden = false;

            var Module = { 
                canvas: canvas,
                setStatus: function (text) {
                    if (!Module["setStatus"].last)
                    Module["setStatus"].last = { time: Date.now(), text: "" };
                    if (text === Module["setStatus"].last.text) return;
                    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
                    var now = Date.now();
                    if (m && now - Module["setStatus"].last.time < 30) return; // if this is a progress update, skip it if too soon
                    Module["setStatus"].last.time = now;
                    Module["setStatus"].last.text = text;
                    if (m) {
                        text = m[1];
                        progressElement.style.width = `${parseInt(m[2]) * 100 / parseInt(m[4])}%`;
                        progressFrameElement.hidden = false;   
                    } else {
                        progressFrameElement.hidden = true;
                    }
                },
            }
            window[canvas.dataset["object"]](Module);
        });
    }
})(window, document);
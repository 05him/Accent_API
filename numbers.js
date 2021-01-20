
var germanInput = document.querySelector("#german-input");
var germanButton = document.querySelector("#german-button");
var germanOutput = document.querySelector("#german-output");
var urlGerman = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function germanClick() {

    var finalGerman = urlGerman + "?text=" + germanInput.value;

    fetch(finalGerman)
        .then(response => response.json())
        .then(json => {
            var finalTranslated = json.contents.translated;
            germanOutput.innertext = finalTranslated;
            console.log(germanOutput.innertext);

        });
};

germanButton.addEventListener("click", germanClick);








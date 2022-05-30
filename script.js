const button = document.getElementById("button");

function click() {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
        .then((response) => {
            response.json().then((data) => {
                showData(data.slip);
            });
        })
        .catch((e) => console.log("Erro: " + e.message));
}

function showData(result) {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).innerHTML = result[campo];
        }
    }
}

button.addEventListener("click", click);

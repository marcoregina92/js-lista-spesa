const prodotti = ["latte", "uova", "birra", "lievito", "farina", "acqua"];

const spesa = document.getElementById("listaSpesa");

let i = 0;

while (i < prodotti.length) {
    const newItem = document.createElement("li");
    newItem.innerHTML = prodotti[i];
    spesa.append(newItem);
    i++;
    console.log[spesa]
}

document.getElementById("addBtn").addEventListener("click", function() {
    const nuovoElemento = document.getElementById("newElement").value;

    prodotti.push(nuovoElemento);
    spesa.innerHTML += `<li>${nuovoElemento}</li>`;

    //resetto (svuoto) il testo dell'input
    document.getElementById("newElement").value = "";

});
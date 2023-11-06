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
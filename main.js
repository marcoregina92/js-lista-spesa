const prodotti = ["latte", "uova", "birra", "lievito", "farina", "acqua"];

const spesa = document.getElementById("listaSpesa");

let i = 0;

while (i < prodotti.lenght) {
    const newItem = document.createElement("li");
    newItem.innerHTML = prodotti[i];
    spesa.append(newItem);
    i++;
}
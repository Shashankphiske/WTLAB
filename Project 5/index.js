
const addItem = () => {
    let items = []
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const cost = document.getElementById("cost").value;
    const type = document.getElementById("type").value;

    items.push(name, weight, cost, type);

    let listitem = document.getElementById("content");

    const mainItem = document.createElement("div");
    const newItem = document.createElement("p");
    const text = document.createTextNode(`${name} ${weight} ${cost} ${type}`);

    mainItem.classList.add("mainitem");

    for(let i = 0; i < 4; i++){
        let item = document.createElement("p");
        let text = document.createTextNode(items[i]);
        item.appendChild(text);
        item.classList.add("item");
        mainItem.appendChild(item);
    }

    listitem.appendChild(mainItem);

    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("type").value = "";
}
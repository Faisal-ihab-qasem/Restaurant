'use strict';

function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

Food.prototype.generateId = function () {
    const randomId = Math.floor(Math.random() * 9000) + 1000;
    this.id = randomId;
};

Food.prototype.render = function () {
    const foodTable = document.getElementById("foodTable");
    const tbody = foodTable.querySelector("tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.type}</td>
        <td>${this.price}</td>
    `;

    tbody.appendChild(row);
};

document.getElementById("foodForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const foodName = document.getElementById("foodName").value;
    const foodType = document.getElementById("foodType").value;
    const foodPrice = document.getElementById("foodPrice").value;

    const newFood = new Food();
    newFood.generateId();
    newFood.name = foodName;
    newFood.type = foodType;
    newFood.price = foodPrice;

    newFood.render();

    this.reset();
});

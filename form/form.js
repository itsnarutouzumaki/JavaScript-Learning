const nameInput = document.querySelector(".name");
const rollInput = document.querySelector(".roll");
const markInput = document.querySelector(".mark");
const table = document.querySelector("table");
// const body = document.querySelector("body");


const submit = document.querySelector(".submit");

submit.addEventListener("click", function(e) {
  // Create a new table row
  let newRow = document.createElement("tr");
  body.style.backgroundColor = "red";

  // Create and append new cells to the row
  let nameCell = document.createElement("td");
  nameCell.textContent = nameInput.value;
  newRow.appendChild(nameCell);

  let rollCell = document.createElement("td");
  rollCell.textContent = rollInput.value;
  newRow.appendChild(rollCell);

  let markCell = document.createElement("td");
  markCell.textContent = markInput.value;
  newRow.appendChild(markCell);

  // Append the new row to the table
  table.appendChild(newRow);

  // Clear the input values
  nameInput.value = "";
  rollInput.value = "";
  markInput.value = "";
});

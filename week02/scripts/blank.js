const input = document.querySelector ("#favchap");
const button = document.querySelector ("button");
const list = document.querySelector ("book");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
deleteButton.textContent = "X"
li.append(deleteButton);
li.append(li);


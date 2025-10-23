function text() {
  let Add = document.getElementById("list");
  let cont = document.getElementById("container");
  let task = Add.value.trim();
  if (task === "") {
    return;
  }
  let para = document.createElement("p");
  para.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => para.remove();

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => {
    let currentText = para.firstChild.textContent;
    let newText = prompt("Edit your text here", currentText);

    if (newText !== null && newText.trim() !== "") {
      para.firstChild.textContent = newText;
    }
  };

  para.appendChild(document.createTextNode(" "));
  para.appendChild(deleteButton);
  para.appendChild(document.createTextNode(" "));
  para.appendChild(editButton);
  cont.appendChild(para);
  Add.value = "";
}
text();

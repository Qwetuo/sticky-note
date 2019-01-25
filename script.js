const createNewNote = () => {
  const note = document.createElement("div");
  note.classList.add("note-container");
  note.innerHTML =
    "<textarea class='title' placeholder='Enter title'></textarea>" +
    "<textarea class='content' placeholder='Enter content...'></textarea>";
  return note;
};

const initialNote = createNewNote();

document.body.appendChild(initialNote);

const button = document.createElement("div")
button.setAttribute("id", "add-new-note")
button.innerHTML = "+"

document.body.appendChild(button)

button.addEventListener("click", () => {
  const note = createNewNote();
  document.body.insertBefore(note, button);
});

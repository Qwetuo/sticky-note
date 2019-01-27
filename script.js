function searchBarElem() {
  const searchContainer = document.createElement("div")
  searchContainer.setAttribute("id", "search-container")

  const input = document.createElement("input")
  input.setAttribute("id", "search-input")
  input.setAttribute("placeholder", "Search for note title...")
  searchContainer.appendChild(input)

  const searchBtn = document.createElement("button")
  searchBtn.textContent = "Search"
  searchBtn.classList.add("search-button")
  searchContainer.appendChild(searchBtn)
  searchBtn.addEventListener("click", function() {
    const searchValue = input.value.toLowerCase()

    let notes = document.querySelectorAll(".note-container")
    notes = [].slice.call(notes)

    notes.forEach(function(note) { 
      note.style.display = "block"
    })

    const notesWithNoMatch = notes.filter(function(note) {
      const titleValue = note.querySelector(".title").value.toLowerCase()
      return titleValue.indexOf(searchValue) === -1
    })
    notesWithNoMatch.forEach(function(note) {
      note.style.display = "none"
    })
  })

  const undoBtn = document.createElement("button")
  undoBtn.textContent = "Undo"
  undoBtn.classList.add("undo-button")
  searchContainer.appendChild(undoBtn)
  undoBtn.addEventListener("click", function() {
    let notes = document.querySelectorAll(".note-container")
    notes = [].slice.call(notes)

    notes.forEach(function(note) {
      note.style.display = "block"
    })
  })

  return searchContainer
}

document.body.appendChild(searchBarElem())

function createNewNote() {
  const note = document.createElement("div");
  note.classList.add("note-container");
  note.innerHTML =
    "<textarea class='title' placeholder='Enter title'></textarea>" +
    "<textarea class='content' placeholder='Enter content...'></textarea>";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.textContent = "x";
  note.appendChild(cancelBtn);
  cancelBtn.addEventListener("click", function(note) {
    const noteNode = note.target.parentNode
    noteNode.parentNode.removeChild(noteNode)
  });

  return note;
};

const initialNote = createNewNote();

document.body.appendChild(initialNote);

const button = document.createElement("div")
button.setAttribute("id", "add-new-note")
button.innerHTML = "+"

document.body.appendChild(button)

button.addEventListener("click", function () {
  const note = createNewNote();
  document.body.insertBefore(note, button);
});

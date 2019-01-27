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

function createNewNote(title, content) {
  const titleToRender = title ? title : "";
  const contentToRender = content ? content : "";

  const note = document.createElement("div");
  note.classList.add("note-container");
  note.innerHTML =
    "<textarea class='title' placeholder='Enter title'>" + titleToRender + "</textarea>" +
    "<textarea class='content' placeholder='Enter content...'>" + contentToRender + "</textarea>";

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

function retrieveSavedNotes() {
  const titleArr = JSON.parse(localStorage.getItem("titles"))
  const contentArr = JSON.parse(localStorage.getItem("contents"))
  if (titleArr === null) {
    const emptyNote = createNewNote();
    document.body.appendChild(emptyNote)
  } else {
    titleArr.forEach(function(title,index) {
      const note = createNewNote(title, contentArr[index])
      document.body.appendChild(note)
    })
  }
}

retrieveSavedNotes()

const button = document.createElement("div")
button.setAttribute("id", "add-new-note")
button.innerHTML = "+"

document.body.appendChild(button)

button.addEventListener("click", function () {
  const note = createNewNote();
  document.body.insertBefore(note, button);
});


// SAVE

const saveButton = document.createElement("button")
saveButton.innerHTML = "Save"
saveButton.classList.add("saveBtn")

document.body.appendChild(saveButton)

saveButton.addEventListener("click", function() {
  let titleNodes = document.querySelectorAll(".title")
  titleNodes = [].slice.call(titleNodes)
  let titleArr = []
  titleNodes.forEach(function(titleNode) {
    titleArr.push(titleNode.value)
  })

  let contentNodes = document.querySelectorAll(".content")
  contentNodes = [].slice.call(contentNodes)
  let contentArr = []
  contentNodes.forEach(function(contentNode) {
    contentArr.push(contentNode.value)
  })

  localStorage.setItem("titles", JSON.stringify(titleArr))
  localStorage.setItem("contents", JSON.stringify(contentArr))
  const storageLen = JSON.parse(localStorage.getItem("titles")).length
  alert(storageLen + " notes have been saved!")
})
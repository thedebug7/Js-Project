// Select DOM Elements
const addNoteButton = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

// Function to Add Note
const addNote = () => {
    // Create the note container
    const note = document.createElement('div'); // This make new emptty HTML <div> element in browser but not visiable in browser.
    note.classList.add('note'); // Thsi 

    // Textarea for content
    const textArea = document.createElement('textarea');
    textArea.placeholder = "Write your note here...";
    note.appendChild(textArea);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        notesContainer.removeChild(note);
    });

    // Append textarea and delete button to note
    note.appendChild(deleteButton);

    // Append note to container
    notesContainer.appendChild(note);
};

// Add event listener to "Add Note" button
addNoteButton.addEventListener('click', addNote);

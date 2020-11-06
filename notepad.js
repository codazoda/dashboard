function textSave() {
    // Grab the text from the typebox text box and save it to local storage
    notepad = document.getElementById("notepad");
    let fullText = notepad.value;
    localStorage.setItem("dashboard-notepad-" + currentFileNumber, fullText);
}

function textLoad(fileNumber) {
    currentFileNumber = fileNumber;
    // Load the file from storage
    storageKey = "dashboard-notepad-" + fileNumber;
    notepad = document.getElementById('notepad');
    notepad.value = localStorage.getItem(storageKey);
}


/**
 * The main function that will run when the page is loaded
 */
function main() {
    // Load any previously saved text
    textLoad(currentFileNumber);
    // Add an event listener to save text on keyup
    typebox = document.getElementById('notepad');
    typebox.addEventListener("keyup", textSave);
}

let currentFileNumber = 0;

main();

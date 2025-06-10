const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;

// Function to display the current flashcard
function displayCard() {
    let flashcard = flashcards[currentIndex];
    let content;
    
    if (showingTerm) {
        content = flashcard.term;
    } else {
        content = flashcard.definition;
    }

    document.getElementById("card-content").textContent = content;
}


//
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const flip = document.getElementById("flashcard");
const add = document.getElementById("add-card-btn");

// Prev
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
});

// Next
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length; // why does ++ and -- not work?
    showingTerm = true; //shows term
    displayCard();  
});

// Flip 
flip.addEventListener("click", () => {
    showingTerm = !showingTerm;
    displayCard();
});

// Add
add.addEventListener("click", () => {
    const newDef = document.getElementById("new-definition").value;
    const newTerm = document.getElementById("new-term").value;
    
    if (newTerm != null && newDef != null) {
        flashcards.push({ term: newTerm, definition: newDef });
        document.getElementById("new-term").value= "";           //reset         
        document.getElementById("new-definition").value= "";
        displayCard();
    } else {
        alert("Please enter both a term and a definition.");
    }
});
// show first
displayCard();
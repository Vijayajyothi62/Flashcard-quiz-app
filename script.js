let flashcards = [
{
question: "What is HTML?",
answer: "HyperText Markup Language"
},
{
question: "What is CSS?",
answer: "Cascading Style Sheets"
},
{
question: "What is JavaScript?",
answer: "Programming Language for Web Development"
}
];

let currentIndex = 0;

function displayCard(){

if(flashcards.length === 0){
document.getElementById("cardText").innerText =
"No Flashcards Available";
return;
}

document.getElementById("cardText").innerText =
flashcards[currentIndex].question;
}

function showAnswer(){

if(flashcards.length === 0) return;

document.getElementById("cardText").innerText =
flashcards[currentIndex].answer;
}

function nextCard(){

if(flashcards.length === 0) return;

currentIndex++;

if(currentIndex >= flashcards.length){
currentIndex = 0;
}

displayCard();
}

function previousCard(){

if(flashcards.length === 0) return;

currentIndex--;

if(currentIndex < 0){
currentIndex = flashcards.length - 1;
}

displayCard();
}

function addFlashcard(){

let question =
document.getElementById("question").value;

let answer =
document.getElementById("answer").value;

if(question === "" || answer === ""){
alert("Please enter both question and answer");
return;
}

flashcards.push({
question: question,
answer: answer
});

document.getElementById("question").value = "";
document.getElementById("answer").value = "";

alert("Flashcard Added Successfully!");
}

function editFlashcard(){

if(flashcards.length === 0){
alert("No flashcards available");
return;
}

let newQuestion =
document.getElementById("question").value;

let newAnswer =
document.getElementById("answer").value;

if(newQuestion === "" || newAnswer === ""){
alert("Enter new question and answer");
return;
}

flashcards[currentIndex].question = newQuestion;
flashcards[currentIndex].answer = newAnswer;

displayCard();

alert("Flashcard Updated!");
}

function deleteFlashcard(){

if(flashcards.length === 0){
alert("No flashcards to delete");
return;
}

flashcards.splice(currentIndex, 1);

if(currentIndex >= flashcards.length){
currentIndex = 0;
}

displayCard();

alert("Flashcard Deleted!");
}

displayCard();

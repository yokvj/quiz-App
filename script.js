const questions = [  
    {  
        question: "What is the capital of France?",  
        answers: [  
            { text: "Berlin", correct: false },  
            { text: "Madrid", correct: false },  
            { text: "Paris", correct: true },  
            { text: "Rome", correct: false },  
        ]  
    },  
    {  
        question: "Which planet is known as the Red Planet?",  
        answers: [  
            { text: "Earth", correct: false },  
            { text: "Mars", correct: true },  
            { text: "Jupiter", correct: false },  
            { text: "Venus", correct: false },  
        ]  
    },  
    {  
        question: "What is the largest mammal in the world?",  
        answers: [  
            { text: "African Elephant", correct: false },  
            { text: "Blue Whale", correct: true },  
            { text: "Giraffe", correct: false },  
            { text: "Great White Shark", correct: false },  
        ]  
    },  
    {  
        question: "Who wrote the play 'Romeo and Juliet'?",  
        answers: [  
            { text: "Charles Dickens", correct: false },  
            { text: "Mark Twain", correct: false },  
            { text: "William Shakespeare", correct: true },  
            { text: "Jane Austen", correct: false },  
        ]  
    },  
    {  
        question: "What is the chemical symbol for gold?",  
        answers: [  
            { text: "Au", correct: true },  
            { text: "Ag", correct: false },  
            { text: "Pb", correct: false },  
            { text: "Fe", correct: false },  
        ]  
    }  
];

const questionele = document.getElementById("question")

const answerbtn = document.getElementById("answer-buttons")

const next = document.getElementById("next")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
next.innerHTML = "Next";
showQuestion();
}


function showQuestion() {
    resetstate();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
     questionele.innerHTML = questionNo + "."+currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);

        if(answer.correct)
        {
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click" ,selectdeans)
        {

        }
        });
    }




    function resetstate(){
        next.style.display ="none"
        while(answerbtn.firstChild)
        {
            answerbtn.removeChild(answerbtn.firstChild)
        }
    }

    startQuiz();

    function selectdeans(e){
        const selectan = e.target;
        const iscorrect =selectan.dataset.correct==="true";
        if (iscorrect)
        {
            selectan.classList.add("correct")
            score++
        }
        else{
            selectan.classList.add("incorrect")
        }


        Array.from(answerbtn.children).forEach(button =>{
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");

            }
            button.disabled = true;

        });

        next.style.display = "block";

    }


    function showscore(){
        resetstate()
        questionele.innerHTML = `you scored ${score} out of ${questions.length}!`
        next.innerHTML =" Play Again"
        next.style.display = "block"
    }
    function handelnextbtn(){
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length)
        {
            showQuestion()
        }else
        {
            showscore()
        }
    }

    next.addEventListener("click" ,()=>{
        if(currentQuestionIndex < questions.length)
        {
            handelnextbtn()
        }else{
            startQuiz()
        }
    })
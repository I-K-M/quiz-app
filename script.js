const quizData = [
    {
        question: 'Quel oiseau est le plus rapide du monde ?',
        a: 'Le faucon crécerelle',
        b: 'Le faucon hobereau',
        c: 'Le faucon pèlerin',
        d: 'Le faucon émerillon',
        correct: 'c',
    }, {
        question: 'Quel oiseau mange des os ?',
        a: 'Le canard colvert',
        b: 'Le balbuzard pêcheur',
        c: 'Le circaète Jean-Le-Blanc',
        d: 'Le gypaète barbu',
        correct: 'd',
    }, {
        question: 'Quel oiseau a le bec le plus long du monde ?',
        a: 'Le pélican à lunettes',
        b: 'Le colibri porte-épée',
        c: 'Le bec-en-sabot',
        d: 'La spatule rosée',
        correct: 'a',
    }, {
        question: 'Quel oiseau est le plus dangereux du monde ?',
        a: 'Le goéland argenté',
        b: 'Le plongeon huard',
        c: 'Le casoar à casque',
        d: 'Le gypaète barbu',
        correct: 'c',
    }, {
        question: 'Quel oiseau est le plus intelligent du monde ?',
        a: 'La frégate superbe',
        b: 'Le corbeau de Nouvelle-Calédonie',
        c: 'Le perroquet gris du Gabon',
        d: 'Le geai gris',
        correct: 'b',
    },

];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

        return answer;
}


function deselectAnswers() {
     answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();


    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

            currentQuiz++;

            if(currentQuiz < quizData.length) {
              loadQuiz();
            } else {
                quiz.innerHTML = 
                '<h3>Vous avez répondu correctement à ' + score + ' question(s) sur ' + quizData.length + ' ! </h3>'; 
                let reloadSpace = document.getElementById("reload"); 
                let btn = document.getElementById("reloadBtn");     
                if(reloadSpace.style.display === "none") {
                    reload.style.display = "block";
                } else {
                    div.style.display = "none";
                }                 
                btn.addEventListener("click", function() {
                window.location.reload();
             });



    }
    }

});
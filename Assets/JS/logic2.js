

let i = 0
const start = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const choices = questions[i].choices
const getQuestions = document.getElementById('questions')
const choicesEl = document.getElementById('choices')
const correctSound = new Audio('./Assets/sfx/correct.wav')
const incorrectSound = new Audio('./Assets/sfx/incorrect.wav')
const endScrn = document.getElementById('end-screen')
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const submitBtn = document.getElementById('submit')

const time = document.getElementById('time');
let timeleft
let timeInterval


function countDown() {
    timeleft = 100
    time.innerText = timeleft
    timeInterval = setInterval(() => {
        timeleft--
        time.innerText = timeleft
        if (timeleft <= 0) {
            timeleft = 0;
            endScreen()
        }
    }, 1000)
}

function endScreen() {
    clearInterval(timeInterval)
    time.innerText = 0;
    getQuestions.setAttribute('class', 'hide')
    choicesEl.setAttribute('class', 'hide')
    endScrn.classList.remove('hide')
    finalScore.append(timeleft)
}



function starter() {
    start.addEventListener('click', (event) => {
        startScreen.setAttribute('class', 'hide')
        countDown()
        questionDisplay()
        optionDisplay()
    })
}

function questionDisplay() {
    var questionItem = document.createElement('h3')
    var questionText = document.createTextNode(questions[i].title)
    questionItem.appendChild(questionText)
    getQuestions.append(questionItem)
    getQuestions.classList.remove('hide')

}

function optionDisplay() {

    for (j = 0; j < choices.length; j++) {
        choicesEl.insertAdjacentHTML(
            'beforeend',
            `<button class="choiceOption">${questions[i].choices[j]}</button>`
        );

    }

    choicesEl.classList.remove('hide')
}


function answerCheck() {
    choicesEl.addEventListener('click', (event) => {
        var answer = questions[i].answer
        if (event.target.innerText !== answer) {
            incorrectSound.play()
            timeleft -= 10

        } else {
            correctSound.play()
        }
        
        if (event.target.matches('.choiceOption')) {

            getQuestions.innerHTML = '';
            choicesEl.innerHTML = '';
            if (i < questions.length - 1) {
                i++
                questionDisplay();
                optionDisplay()
            } else {
                endScreen()
            }
        }
    })
}

function storeScores() {
    let Userinitials = initials.value
    let Userscore = finalScore.innerText
    let userObj = [{initials: Userinitials, score: Userscore }]
    if (localStorage.getItem('scoreBoard') === null) {
        localStorage['scoreBoard']=JSON.stringify(userObj)
    } else {
        let existedData = localStorage.getItem('scoreBoard')
        userArr = [existedData]
        userArr.push(userObj)
        localStorage['scoreBoard']=JSON.stringify(userArr)
    }
}

function displayScore(){
    let UserHighscore = JSON.parse(localStorage.getItem('scoreBoard'))
    endScrn.setAttribute('class', 'hide')
    document.body.append(UserHighscore)
}

submitBtn.addEventListener('click', () => {
    storeScores()
    displayScore()
})




function init() {
    starter()
    answerCheck()
}

init()


const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const clearBtn = document.getElementById('clearBtn')



function displayScore (){
    
    if(localStorage.getItem('scoreBoard')=== null){
        highscore.innerText = 'No Scores yet';
        return
    }

    let storedScores = JSON.parse(localStorage.getItem('scoreBoard'))

    for (i=0; i < 10; i++){
        highscore.insertAdjacentHTML(
            'beforeend',
            `<li>${storedScores[i].initials}-${storedScores[i].userScore}</li>`
        )
    }
}


clearBtn.addEventListener('click', ()=>{
    localStorage.removeItem('scoreBoard')
    highscore.innerHTML=''
})
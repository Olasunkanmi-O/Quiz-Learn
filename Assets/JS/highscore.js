
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const clearBtn = document.getElementById('clearBtn')
const submitBtn = document.getElementById('submit')

let html;

function displayScore(){
    // get the scorebord from local storage
    let UserHighscore = JSON.parse(localStorage.getItem('scoreBoard'))
    // sets the content to empty value 
    let html='';

    if(!UserHighscore){
        highscore.insertAdjacentHTML('beforeend',`No HighScore`)
    }else{        
    
    UserHighscore.forEach(item=>{
        html += `<li>${item.initials} - ${item.score}</li>`
    })}

    highscore.innerHTML=html
    
}

displayScore()

// add event listener to clear button

clearBtn.addEventListener('click',()=>{
    localStorage.removeItem('scoreBoard')
    displayScore()
})


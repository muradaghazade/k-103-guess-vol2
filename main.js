let chance = 5
let number = 0
let win = document.getElementById('win')
let lose = document.getElementById('lose')
let main = document.getElementById('guess')
let wrong = document.getElementById('wrong')   
let chanceCount = document.getElementById('chanceCount') //burda

chanceCount.innerText = chance //burda

function chooseRandom() {
    let rangeNum = document.getElementById('rangeNum').value
    number = Math.floor(Math.random() * rangeNum)
    console.log(number);
}

function guess() {
    let userNum = document.getElementById('user-num').value
    if (userNum == number) {
        main.style.display = 'none'
        win.style.display = 'block'
        wrong.style.display = 'none'   
    }
    else {
        wrong.style.display = 'block'
        chance--                                
        chanceCount.innerText = chance            //burda
        console.log(chance);
        
        if (chance == 0) {
            main.style.display = 'none'
            lose.style.display = 'block'
            wrong.style.display = 'none'   
        }
    }
    
}
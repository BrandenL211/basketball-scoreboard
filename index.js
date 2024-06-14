let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let homeScoreCount = 0
let guestScoreCount = 0
const all_buttons = document.querySelectorAll('.btn')

function plusOne(event) {
    if(event.target.id == "btn1"){
        homeScoreEl.textContent = homeScoreCount + 1
        homeScoreCount++
    } else if(event.target.id == "btn4") {
        guestScoreEl.textContent = guestScoreCount + 1
        guestScoreCount++
    }
}

function plusTwo(event) {
    if(event.target.id == "btn2"){
        homeScoreEl.textContent = homeScoreCount + 2
        homeScoreCount += 2
    } else if(event.target.id == "btn5") {
        guestScoreEl.textContent = guestScoreCount + 2
        guestScoreCount += 2
    }
}

function plusThree(event) {
    if(event.target.id == "btn3"){
        homeScoreEl.textContent = homeScoreCount + 3
        homeScoreCount += 3
    } else if(event.target.id == "btn6") {
        guestScoreEl.textContent = guestScoreCount + 3
        guestScoreCount += 3
    }
}

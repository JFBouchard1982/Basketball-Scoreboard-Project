let hscoreEl = 0 
let gscoreEl = 0
let homeEl = document.getElementById("homesq")
let guestEl = document.getElementById("guestsq")
    homeEl.textContent = 0
    guestEl.textContent = 0

function incrementh1() {
    let result = hscoreEl +=1
    homeEl.textContent = result
}
function incrementh2() {
    let result = hscoreEl +=2
    homeEl.textContent = result
}
function incrementh3() {
    let result = hscoreEl +=3
    homeEl.textContent = result
}
function incrementg1() {
    let result = gscoreEl +=1
    guestEl.textContent = result
}
function incrementg2() {
    let result = gscoreEl +=2
    guestEl.textContent = result
}
function incrementg3() {
    let result = gscoreEl +=3
    guestEl.textContent = result
}
function newgame() {
    homeEl.textContent = 0
    guestEl.textContent = 0
    hscoreEl = 0
    gscoreEl = 0
}
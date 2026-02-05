const player1 = {
    currentScore: 0,
    totel: 0
}
const player2 = {
    currentScore: 0,
    totel: 0
}
let player;
const score = Math.floor((Math.random() * 50) + 50)
document.querySelector("header").textContent += score
const start = Math.floor((Math.random() * 2) + 1)
if (start === 1) {
    player = player1
    document.getElementById("player1").style.color = "red"
}
else {
    player = player2
    document.getElementById("player2").style.color = "red"
}
const roll = document.getElementById("roll")
roll.addEventListener("click", (event) => {
    const dice = Math.floor((Math.random() * 6) + 1)
    const dice2 = Math.floor((Math.random() * 6) + 1)
    const my = document.querySelector("p#d1")
    my.textContent = dice
    const myt = document.querySelector("p#d2")
    myt.textContent = dice2
    if (dice === dice2) {
        player.currentScore = 0
        if (player === player1) {
            player = player2
            document.querySelector("#p1").textContent = player.currentScore
            document.getElementById("player2").style.color = "red"
            document.getElementById("player2").style.color = "blak"
        }
        else {
            player = player1
            document.querySelector("#p2").textContent = player.currentScore
            document.getElementById("player1").style.color = "red"
            document.getElementById("player2").style.color = "blak"
        }
    }
    else {
        const sumd = dice + dice2
        const sum = player.currentScore += sumd
        console.log(sum);

        if (player === player1) {
            document.querySelector("#p1").textContent = player.currentScore
        }
        else {
            document.querySelector("#p2").textContent = player.currentScore
        }
    }
     if (player.totel <= score) {
        const sucre = document.getElementById("sucre")
        sucre.classList.add("se")
    }
})

const hold = document.getElementById("hold")
hold.addEventListener("click", (ev) => {
    const totel = player.totel += player.currentScore
    if (player === player1) {
        document.querySelector("#tp1").textContent = player.totel
        player.currentScore = 0
        document.querySelector("#p1").textContent = player.currentScore
        player = player2
    }
    else {
        document.querySelector("#tp2").textContent = player.totel
        player.currentScore = 0
        document.querySelector("#p2").textContent = player.currentScore
        player = player1
    }
})
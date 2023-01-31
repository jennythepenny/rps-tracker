input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    Rounds += 1
    PA += 1
    update_score()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("TIE")
    Rounds += 1
    Ties += 1
    update_score()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    Rounds += 1
    PB += 1
    update_score()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    Rounds = 0
    Ties = 0
    PA = 0
    PB = 0
    OLED.writeStringNewLine("time to play rock paper scissors!!!")
    basic.pause(2000)
    update_score()
}
function update_score () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
let PB = 0
let Ties = 0
let PA = 0
let Rounds = 0
reset()

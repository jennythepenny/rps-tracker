input.onGesture(Gesture.Shake, function () {
	
})
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
let PA = 0
let Ties = 0
let Rounds = 0
OLED.init(128, 64)
Rounds = 0
Ties = 0
PA = 0
PB = 0
OLED.writeStringNewLine("time to play tic-tac-toe!!!")
basic.pause(2000)
update_score()

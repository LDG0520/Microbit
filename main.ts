input.onButtonPressed(Button.A, function () {
    basic.showString("How many steps?")
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    if (steps >= 1500) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
    basic.showNumber(0.7 * steps)
})
let steps = 0
steps = 0

input.onButtonPressed(Button.A, function () {
    gamesteps = 0
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("GAME START")
    random = randint(10, 50)
    basic.showNumber(random)
    if (0 >= random) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    gamesteps += 1
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.7 * steps)
})
let random = 0
let gamesteps = 0
let steps = 0
steps = 0

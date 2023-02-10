input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 C F A F G D C5 ", 92)
    bitbot.buzz(true)
    bitbot.setLedColor(0xFF0000)
})
basic.showLeds(`
    . . # . .
    . . . . .
    # . # . #
    . . . . .
    . . # . .
    `)
music.playMelody("F D C5 E A D F C ", 120)
basic.forever(function () {
    bitbot.setTalon(40)
    bitbot.BBBias(BBRobotDirection.Left, 39)
    bitbot.ledShift()
    bitbot.setPixel(16, 0xFF0000)
    bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    bitbot.select_model(BBModel.Classic)
    bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
    bitbot.rotate(BBRobotDirection.Left, 60)
    basic.showArrow(ArrowNames.East)
})

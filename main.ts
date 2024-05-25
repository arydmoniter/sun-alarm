let result = 0
basic.clearScreen()
basic.forever(function () {
    result = pins.analogReadPin(AnalogPin.P1)
    result = result / 100
    if (result >= 5) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        serial.writeValue("value", result)
        basic.pause(1000)
    }
})

let result = 0
let uvl = 0
basic.clearScreen()
basic.forever(function () {
    uvl = pins.analogReadPin(AnalogPin.P1)
    result = uvl / 100
    basic.pause(100)
    if (result >= 5) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        serial.writeValue("value", result)
        basic.pause(1000)
    }
})

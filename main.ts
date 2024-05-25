let uvl = 0
let result = 0
basic.forever(function () {
    uvl = pins.analogReadPin(AnalogPin.P1)
    result = uvl / 10
    basic.pause(100)
    serial.writeValue("value", result)
    if (result >= 3) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    basic.showNumber(result)
})

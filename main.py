uvl = 0
result = 0

def on_forever():
    global uvl, result
    uvl = pins.analog_read_pin(AnalogPin.P1)
    result = uvl / 1
    basic.pause(100)
    serial.write_value("value", result)
    if result >= 3:
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(1000)
basic.forever(on_forever)

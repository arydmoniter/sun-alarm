basic.clear_screen()

def on_forever():
    result = pins.analog_read_pin(AnalogPin.P0)
    result = result/10
    basic.show_number(result)
    serial.write_value("value", result)
basic.forever(on_forever)

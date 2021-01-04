def on_received_string(receivedString):
    global People_In_Shop
    People_In_Shop = People_In_Shop - 1
radio.on_received_string(on_received_string)

People_In_Shop = 0
radio.set_group(13)
People_In_Shop = 0
while True:
    if pins.digital_read_pin(DigitalPin.P0) == 0 and People_In_Shop <= 10:
        basic.show_leds("""
            . . . # #
            . # # . .
            # . . . .
            . # # . .
            . . . # #
            """)
        basic.show_leds("""
            . . . . #
            . . # # .
            . # . . .
            . . # # .
            . . . . #
            """)
        basic.show_string(" ENTRANCE")
        while True:
            pins.digital_write_pin(DigitalPin.P1, 1)
    elif pins.digital_read_pin(DigitalPin.P0) == 1 and People_In_Shop <= 10:
        basic.clear_screen()
        basic.show_icon(IconNames.HAPPY)
        People_In_Shop = People_In_Shop + 1
    else:
        while True:
            pins.digital_write_pin(DigitalPin.P2, 1)
        basic.show_string("PLEASE WAIT")
        basic.show_icon(IconNames.NO)